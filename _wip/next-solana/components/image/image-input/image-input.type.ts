import { LegacyRef } from 'react'

export interface ImageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef: LegacyRef<HTMLInputElement>
}
