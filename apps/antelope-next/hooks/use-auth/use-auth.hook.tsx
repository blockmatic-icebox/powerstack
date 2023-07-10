"use client"

import { useState } from "react"
import AnchorLink, {
  AnyAction,
  ChainId,
  Name,
  PermissionLevel,
} from "anchor-link"
import {
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut,
  useSession,
} from "next-auth/react"
import { useEffectOnce } from "react-use"

import { chainConfig } from "~/config/chain"
import { clientEnv } from "~/config/client"
import { createNewAnchorLink } from "~/lib/anchor"

export function useAuth() {
  const { data: session, status } = useSession()
  const [anchorLink] = useState<AnchorLink>(createNewAnchorLink())

  const signInWithAnchor = async () => {
    const identity = await anchorLink.login(clientEnv.appName)
    const account = identity.signer.actor.toString()
    const pubKey = identity.session.publicKey.toString()
    const signature = identity.signatures.map((sign: { toString: () => any }) =>
      sign.toString()
    )[0]
    const trxDigest = identity.transaction
      .signingDigest(identity.session.chainId)
      .toString()

    return nextAuthSignIn("antelope", {
      redirect: false,
      signature: signature.toString(),
      trxDigest: trxDigest.toString(),
      account,
      pubKey,
      json: true,
    })
  }

  const signOutWithAnchor = async () => {
    console.log("signing out")
    if (!session) return
    await anchorLink.removeSession(
      clientEnv.appName,
      PermissionLevel.from({
        actor: Name.from(session.user.account),
        permission: "active",
      }),
      ChainId.from(chainConfig.eosMainnet.chainId)
    )
    nextAuthSignOut()
  }

  // restore anchor session on loa
  const restoreAnchorSession = async () => {
    await anchorLink.restoreSession(
      clientEnv.appName,
      undefined,
      ChainId.from(chainConfig.eosMainnet.chainId)
    )
  }

  // restore sessoin on mount
  useEffectOnce(() => {
    restoreAnchorSession()
  })

  return {
    session,
    signIn: signInWithAnchor,
    signOut: signOutWithAnchor,
  }
}
