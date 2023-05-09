import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen'
import { quality } from '@cloudinary/url-gen/actions/delivery'

import { clientEnv } from '~/config/client'

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: clientEnv.cloudinary,
})

export const getCloudinaryImage = (image_id: string): CloudinaryImage => {
  const image = cld.image(image_id)
  image.addFlag('progressive:semi')

  return image
}

export const getCloudinaryVideo = (video_id: string, video_quality?: number) => {
  const video = cld.video(video_id)

  return video_quality ? video.delivery(quality(video_quality)) : video
}
