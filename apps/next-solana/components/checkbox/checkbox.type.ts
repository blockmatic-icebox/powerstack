import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  extra?: string
  color?: string
  variant?: string
  label?: string
  formState?: FieldErrors<FieldValues>
  register?: UseFormRegister<FieldValues>
  error?: {
    type?: string
    message: string
  }
}
