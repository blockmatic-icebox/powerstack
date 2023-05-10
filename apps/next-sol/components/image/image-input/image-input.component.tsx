import { ImageInputProps } from './image-input.type'

export function ImageInput({ inputRef, ...props }: ImageInputProps) {
  return (
    <input
      className="hidden"
      id="upload-profile-image"
      placeholder="file"
      title="input file"
      type="file"
      accept="image/png, image/gif, image/jpeg"
      ref={inputRef}
      {...props}
    />
  )
}
