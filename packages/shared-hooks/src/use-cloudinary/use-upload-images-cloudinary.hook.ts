import { useCallback, useState } from 'react'

import { clientEnv } from '~/config/client'

const presetCloudinary = 'avatar'

export function useUploadImagesCloudinary() {
  const [loading, setLoading] = useState(false)

  const uploadFilesCloudinary = useCallback(async (files: File[]) => {
    const uploadedImages = files.map((file) => {
      setLoading(true)
      const data = new FormData()
      data.append('file', file)
      data.append('upload_preset', presetCloudinary)
      return fetch(clientEnv.cloudinary.apiPublicUrl, {
        method: 'post',
        body: data,
      })
    })

    return Promise.all(uploadedImages)
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()))
      })
      .then((data) => {
        setLoading(false)
        return data
      })
      .catch((error) => console.log('error cloudinary:', error))
  }, [])

  return { uploadFilesCloudinary, loading }
}
