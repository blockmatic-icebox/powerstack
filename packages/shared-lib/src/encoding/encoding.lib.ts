export const base64Encode = (obj: {}) =>
  Buffer.from(JSON.stringify(obj)).toString("base64")

export const base64Decode = (str: string) => {
  try {
    return JSON.parse(Buffer.from(str, "base64").toString())
  } catch (error) {
    // If code detects that it is not an object that is receiving, then we return the variable value as utf-8
    return Buffer.from(str).toString()
  }
}

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

/*
  Check if string is valid UUID
  Credits to: https://melvingeorge.me/blog/check-if-string-valid-uuid-regex-javascript
*/
export function validateUUID(str?: string) {
  if (!str) return

  // Regular expression to check if string is a valid UUID
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

  return regexExp.test(str)
}
