import { ADAPTER_EVENTS, WALLET_ADAPTERS } from '@web3auth/base'
import { Web3AuthCore } from '@web3auth/core'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { PhantomAdapter } from '@web3auth/phantom-adapter'
import { SolanaWallet } from '@web3auth/solana-provider'

import { chainConfig } from '~/config/chain/chain.config'
import { clientEnv } from '~/config/client/client-env.config'
import { logger } from '~/lib/logger/logger.lib'

function subscribeToWeb3AuthEvents() {
  const web3auth = window.web3auth!
  if (!web3auth) throw new Error('web3auth not initialized')

  web3auth.on(ADAPTER_EVENTS.CONNECTED, async (data: unknown) => {
    const web3AuthUser = await web3auth.getUserInfo()
    logger.log('🔑 you are successfully logged in', web3AuthUser, data)
  })

  web3auth.on(ADAPTER_EVENTS.CONNECTING, () => logger.log('connecting ...'))

  web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => logger.log('🔑 web3auth disconnected'))

  web3auth.on(ADAPTER_EVENTS.ERRORED, (error: unknown) =>
    logger.error('🔑 web3auth some error or user has cancelled login request', error),
  )
}

export async function initializeWeb3Auth() {
  logger.log('🔑 initializing web3auth ...')

  // configure the client
  const web3auth = new Web3AuthCore({
    clientId: clientEnv.web3auth.clientId,
    chainConfig: chainConfig.solanaTestnet,
  })

  // make it available globally
  window.web3auth = web3auth

  // subscribe to events
  subscribeToWeb3AuthEvents()

  // open login adapter
  const adapter = new OpenloginAdapter({
    adapterSettings: {
      network: 'testnet',
      clientId: clientEnv.web3auth.clientId,
      uxMode: 'redirect',
      loginConfig: {
        jwt: {
          name: 'Login',
          verifier: clientEnv.web3auth.verifier,
          typeOfLogin: 'jwt',
          clientId: '',
        },
      },
    },
  })

  web3auth.configureAdapter(adapter)

  // configure phantom wallet adapter
  const phantomAdapter = new PhantomAdapter({
    clientId: clientEnv.web3auth.clientId,
  })

  web3auth.configureAdapter(phantomAdapter)

  // initialize web3auth instance
  await web3auth.init()

  logger.log(`🔑 web3auth initialized`)
}

export async function getWeb3AuthUser() {
  let web3AuthUser
  try {
    web3AuthUser = await window.web3auth?.getUserInfo()
  } catch (error) {
    logger.error(error)
    throw new Error('User not logged in')
  } finally {
    if (!web3AuthUser) throw new Error('User not logged in')
    return web3AuthUser
  }
}

async function getWeb3AuthBeforeLogin() {
  const web3auth = getWeb3Auth()
  // check if user already logged in.
  let web3AuthUser
  try {
    web3AuthUser = await web3auth.getUserInfo()
    if (web3AuthUser) logger.log('user already logged in', web3AuthUser)
  } catch (error) {
    // this is fine.
  }
  return { web3auth, web3AuthUser }
}

export async function loginWithMetamask() {
  logger.log('🔑 login with phantom')
  const { web3auth, web3AuthUser } = await getWeb3AuthBeforeLogin()
  await web3auth.connectTo(WALLET_ADAPTERS.METAMASK)
  if (web3AuthUser) return
}

export async function loginWithPhantom() {
  logger.log('🔑 login with phantom')
  const { web3auth, web3AuthUser } = await getWeb3AuthBeforeLogin()
  await web3auth.connectTo(WALLET_ADAPTERS.PHANTOM)
  if (web3AuthUser) return
}

export async function loginWithGoogle() {
  const { web3auth, web3AuthUser } = await getWeb3AuthBeforeLogin()
  if (web3AuthUser) return
  // login with google. the auth server redirects back to the current page.
  try {
    await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      relogin: true,
      loginProvider: 'jwt',
      extraLoginOptions: {
        domain: `https://localhost/oauth2`,
        verifierIdField: 'email',
        response_type: 'token',
        scope: 'email openid profile',
      },
    })
  } catch (error) {
    logger.error(error)
    alert('an error has occurred')
  }
}

export async function logout() {
  const web3auth = getWeb3Auth()
  return web3auth?.logout()
}

export function getWeb3Auth() {
  const web3auth = window.web3auth
  if (!web3auth) throw new Error('web3auth not initialized')
  return web3auth
}

export function getWeb3AuthProvider() {
  const web3auth = getWeb3Auth()
  if (!web3auth.provider) throw new Error('web3auth provider not found')
  return web3auth.provider
}

// utility fn, wont broadcast
export async function getWalletAddresses() {
  const solanaWallet = new SolanaWallet(getWeb3AuthProvider())
  return solanaWallet.requestAccounts()
}
