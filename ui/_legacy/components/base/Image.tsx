import NextImage, { ImageProps } from 'next/image'
import _ from 'lodash'
import { getCloudinaryImage, getCloudinaryVideo } from '~/engine/_legacy/services/cloudinary.service'
import { styled } from '~/ui/_legacy/styles/stitches.config'

type CustomImageProps = ImageProps & {
  src: string
  caption?: string
  cloudinary?: boolean
  cloudinaryVideo?: boolean
}

const ImageContainer = styled('div', {
  width: '100%',
  height: 'max-content',
  'img, video': {
    objectFit: 'cover',
  },
})
const ImageCaption = styled('figcaption', {
  width: '100%',
  fontSize: '$smaller',
  fontWeight: '$bold',
})

export const Image: React.FC<CustomImageProps> = ({
  src,
  alt = '',
  caption,
  cloudinary,
  cloudinaryVideo,
  ...props
}) => {
  const url = cloudinary
    ? (cloudinaryVideo ? getCloudinaryVideo(src) : getCloudinaryImage(src)).toURL()
    : src

  return (
    <ImageContainer>
      <NextImage src={url} alt={alt} width={1000} height={750} {...props} />
      {caption && <ImageCaption>{caption}</ImageCaption>}
    </ImageContainer>
  )
}
