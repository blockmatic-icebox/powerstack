export const noop = () => {}

export const formatAddress = (key: string) => `${key.slice(0, 4)}...${key.slice(-4)}`

export const copyToClipboard = (text: string) => {
  const textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}
