- paquetes USDT
  - tener USDT
  - crypto Bitcoin, Ehtereum ( swaps ui )
  - no tener crypto, ni stable, tiene USD tarjeta. ( buy crypto ui )

user story: comprar paquete

user story ( v1 )

- usuario tiene crypto
- crea una cuenta y wallet web3auth only ( disabilitar opcion de otras wallets? )
- transferir

Information Structure

- Navbar

  - show balance

- Packages

  - buy packages
    head : packages
    body: how to buy a package

    1. get usdt

    - copy structure https://www.moonpay.com/buy/usdt

  - my packages
  - faq
  - bids history table

- Dashboard ( Financial )
  Friendly and simple like this one https://dribbble.com/shots/9394947-Advant-structure-dashboard

  - profit
  - wallet balance
  - profit growth
  - network growth
  - reports per leg
  - total revenue pie ( left leg, right leg, unilevel, bonus )

- Profile ( Social )

  - name
  - foto
  - bio
  - badges
    - stars
    - courses
  - join my network button
  - social profiles
    - website
    - facebook
    - linkendin
    - twitter

- Network Management

  - binary tree visualization
  - unilevel tree visualization
  - placements
  - invite links
  - most active
  - most sales

- Billetera

  - balances
  - swaps
  - enviar
  - recibir ( qr )
  - tarjeta de credito

- Mobile app shell

References
Wallet - http://preview.themeforest.net/item/nftmax-nft-react-admin-dashboard-template/full_screen_preview/38123095

- Total Assets
- Details per asset Ethereum, Bitcoin,
- Pie Chart

- Todo empresa es una empresa de software
- Vesting mantenimiento
- Capital de trabajo para

Consideraciones de UX

- Onramp en minimos pasos
  - Moonpay USDC Tether (TRC-20)
  - Puede ser que de una vez procesamos como compra del paquete
- Facilidad de offramp
  - USDC es aceptado en la mayoría de exchanges como Binance, Coinbase, BitFinex, etc
- Facilidad para pago con crypto
  - exchange dentro el app se puede construir luego, por si el usuario tiene crypto lo debe cambiar a usdt primero
- Wallet of choice for payments, some people will prefer binance. but they can always transfer.

Company needs for launching on the blockchain

- Multisignature wallet with UI and analytics
  with simple interface as meanfi
  - zebec.io
- Payroll
- Fiat to Crypto Onramp/offramp
- Token launchpad
- Exchange / Swap
  - https://socket.tech/ - https://socket.tech/
  - https://li.fi/widget/
  - https://app.chainspot.io/#
  - https://bridge.umbria.network/ ( Solana q2 2023 )
  - https://www.portalbridge.com/#/transfer

Options

- Fund your wallet vs accept all USDT
  - Accept all USDT and transfer
- Accept all USDT and USD Credit Card with Moonpay
-

Case for UDSC on Solana

- lower transaction costs and ability to pay user user gas
- easy onramp moonpay USDCso with credit card
- easy multisig management snowflake safe
- unified bridging from other chains with portalbridge and whormwhole

Case for Phantom Wallet

- its more widely supported than web3auth
- theres no cost for active accounts
- bids are the ones that need no confirmation we can handle that offchain
