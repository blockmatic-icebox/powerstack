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

export const handleStyledTags = (text: string) => {
  let newTextWithLinks = ''
  newTextWithLinks = text.replace(/(^|\s)([#@][a-z\d-]+)/gi, (tag) => {
    const account = tag.trim().substring(1)
    return `<a href="/${account}" class="text-primary-purple text-sm md:text-2xl md:font-normal text-start">${tag}</a>`
  })
  return newTextWithLinks
}

// NOTE: JS alternative to CSS => text-transform: capitalize
// WARN: High Overload
export const capitalizeEachWord = (str: string) => {
  return str.replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase())
}

export const numberWithCommas = (x: number) => new Intl.NumberFormat('en', {}).format(x)
