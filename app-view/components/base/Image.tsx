import NextImage, { ImageProps } from 'next/image'
import _ from 'lodash'
import { buildUrl } from 'cloudinary-build-url'

type CustomImageProps = {
  src: string
  cloudinary?: boolean
  props?: any
}

export const Image = ({ src, alt, cloudinary, ...props }: CustomImageProps & ImageProps) => {
  const url = cloudinary
    ? buildUrl(src, {
        cloud: {
          // ToDo: add this from .env
          cloudName: 'geekli',
          secure: process.env.NODE_ENV === 'production',
        },
      })
    : src
  return <NextImage src={url} alt={alt} width={1000} height={750} {...props} />
}
