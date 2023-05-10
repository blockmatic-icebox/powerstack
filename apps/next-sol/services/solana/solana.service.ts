import {
  TOKEN_PROGRAM_ID,
  createTransferInstruction,
  getAccount,
  getAssociatedTokenAddress,
} from '@solana/spl-token'
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js'

import { TransactionParams } from './solana.type'

if (!process.env.NEXT_PUBLIC_SOLANA_RPC) {
  throw new Error('Solana RPC is not configured')
}

const network = process.env.NEXT_PUBLIC_SOLANA_RPC
const connection = new Connection(network)
const usdcMintAccount = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'

export const getPhantomProvider = () => {
  if (typeof window !== 'undefined') {
    if ('phantom' in window) {
      const provider = window.phantom?.solana
      if (provider?.isPhantom) return provider
    }
  }
}

export const connectPhantomWallet = async () => {
  const provider = getPhantomProvider()
  try {
    const res = await provider.connect()
    return res.publicKey.toString()
  } catch (err) {
    console.error(err)
  }
}

export const createTransferTransaction = async ({
  fromPubkey,
  toPubkey,
  amount,
}: TransactionParams) => {
  try {
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: new PublicKey(fromPubkey),
        toPubkey: new PublicKey(toPubkey),
        lamports: amount * LAMPORTS_PER_SOL,
      }),
    )
    transaction.feePayer = new PublicKey(fromPubkey)
    transaction.recentBlockhash = (await connection.getLatestBlockhash('finalized')).blockhash
    return transaction
  } catch (err) {
    console.error(err)
  }
}

export const transferPhantomTransaction = async ({
  fromPubkey,
  toPubkey,
  amount,
}: TransactionParams) => {
  const provider = getPhantomProvider()
  try {
    const transaction = await createTransferTransaction({ fromPubkey, toPubkey, amount })
    const { signature: transactionHash } = await provider.signAndSendTransaction(transaction)
    return transactionHash
  } catch (err) {
    console.error(err)
  }
}

export const getSolBalance = async (pubkey: string) => {
  try {
    const balance = await connection.getBalance(new PublicKey(pubkey))
    return balance / LAMPORTS_PER_SOL
  } catch (err) {
    console.error(err)
  }
}

export const createUsdcTransferTransaction = async ({
  fromPubkey,
  toPubkey,
  amount,
}: TransactionParams) => {
  try {
    const fromPubkeyAta = await getAssociatedTokenAddress(
      new PublicKey(usdcMintAccount),
      new PublicKey(fromPubkey),
      true,
      TOKEN_PROGRAM_ID,
    )
    const toPubkeyAta = await getAssociatedTokenAddress(
      new PublicKey(usdcMintAccount),
      new PublicKey(toPubkey),
      true,
      TOKEN_PROGRAM_ID,
    )
    const transaction = new Transaction().add(
      createTransferInstruction(
        fromPubkeyAta,
        toPubkeyAta,
        new PublicKey(fromPubkey),
        amount * Math.pow(10, 6),
      ),
    )
    transaction.feePayer = new PublicKey(fromPubkey)
    transaction.recentBlockhash = (await connection.getLatestBlockhash('finalized')).blockhash
    return transaction
  } catch (err) {
    console.error(err)
  }
}

export const transferUsdcPhantomTransaction = async ({
  fromPubkey,
  toPubkey,
  amount,
}: TransactionParams) => {
  const provider = getPhantomProvider()
  try {
    const transaction = await createUsdcTransferTransaction({ fromPubkey, toPubkey, amount })
    const { signature: transactionHash } = await provider.signAndSendTransaction(transaction)
    return transactionHash
  } catch (err) {
    console.error(err)
  }
}

export const getUsdcBalance = async (pubkey: string) => {
  try {
    const pubkeyAta = await getAssociatedTokenAddress(
      new PublicKey(usdcMintAccount),
      new PublicKey(pubkey),
      true,
      TOKEN_PROGRAM_ID,
    )
    const balance = (await getAccount(connection, pubkeyAta)).amount
    return Number(balance) / 10 ** 6
  } catch (err) {
    console.error(err)
  }
}
