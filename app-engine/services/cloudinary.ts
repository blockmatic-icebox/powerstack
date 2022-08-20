import { Cloudinary } from '@cloudinary/url-gen'
import { quality } from '@cloudinary/url-gen/actions/delivery'

export type CloudinaryAsset = {
  asset_name: string
  cloudinary_id: string
}

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  },
})

const getCloudinaryImage = (image_id: string) => {
  const image = cld.image(image_id)
  image.addFlag('progressive:semi')
  return image
}

const getCloudinaryVideo = (video_id: string, video_quality?: number) => {
  const video = cld.video(video_id)
  return video_quality ? video.delivery(quality(video_quality)) : video
}
