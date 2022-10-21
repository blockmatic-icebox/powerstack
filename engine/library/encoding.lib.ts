export const base64Encode = (obj: {}) => Buffer.from(JSON.stringify(obj)).toString('base64')

export const base64Decode = (str: string) => JSON.parse(Buffer.from(str, 'base64').toString())

export function getBase64(file: File): Promise<any> {
  return new Promise((resolve, rejects) => {
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      resolve(reader?.result)
    }
    reader.onerror = function (error) {
      rejects(error)
    }
  })
}
