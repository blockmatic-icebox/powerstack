import { W } from 'windstitch'

import { ButtonVariants } from './button.component'

export type ButtonProps = React.ComponentProps<'button'> &
  ButtonVariantsProps & {
    label?: string
  }

export type ButtonVariantsProps = W.Infer<typeof ButtonVariants>
