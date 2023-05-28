import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

const algorithm = 'aes-256-cbc'
const key = '9314214900ed961a9f15688e0e2f26f3c5afa8dd56afb8c527602548e53d1883'
const IV_LENGHT = 16

export const decrypt = (text: string) => {
  const alltexts: string[] = text.includes(':') ? text.split(':') : []
  const privateIV = alltexts.shift() || ''
  const finaltext = alltexts.shift() || ''
  const encryptedText = Buffer.from(finaltext, 'hex')

  const decipher = createDecipheriv(
    algorithm,
    Buffer.from(key, 'hex'),
    Buffer.from(privateIV, 'hex'),
  )

  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])

  return decrypted.toString()
}

export const encrypt = (param: string) => {
  const iv = randomBytes(IV_LENGHT)
  const cipher = createCipheriv(algorithm, Buffer.from(key, 'hex'), iv)

  let encrypted = cipher.update(param)

  encrypted = Buffer.concat([encrypted, cipher.final()])

  return `${iv.toString('hex')}:${encrypted.toString('hex')}`
}

export const isEncrypted = (param: string) => {
  if (param && param.length > 0 && param.length == 65 && param.includes(':')) {
    const alltexts: string[] = param.split(':')
    const first = alltexts.shift() || ''
    const second = alltexts.shift() || ''
    return first.length == 32 && second.length == 32
  }
  return false
}
