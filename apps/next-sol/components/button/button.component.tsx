import { w } from 'windstitch'

import { ButtonProps } from './button.type'

export function Button({ label, ...props }: ButtonProps) {
  return <ButtonVariants {...props}>{label || props.children}</ButtonVariants>
}

export const ButtonVariants = w.button(
  `cursor-pointer flex items-center justify-center px-4 py-2 text-gray-700 transition duration-500  border rounded-2xl select-none ease focus:outline-none focus:shadow-outline`,
  {
    variants: {
      variant: {
        primary: `bg-primary-500 transition text-white duration-200 hover:bg-primary-600 active:bg-primary-700 dark:bg-primary-400 dark:text-white dark:hover:bg-primary-300 dark:active:bg-primary-200`,
        secondary: `text-white  bg-primary-900 border-gray-200 hover:bg-gray-300`,
        tertiary: `items-center justify-center bg-gradient-to-r from-violet-600 to-red-600 p-0 font-bold opacity-100 transition-all hover:opacity-80`,
        transparent: `bg-transparent border-transparent text-gray-700 hover:text-gray-800`,
      },
      size: {
        normal: ``,
        full: `w-full text-white text-xl font-semibold`,
        lg: `w-full text-white text-xl font-bold btn-lg`,
        xl: `w-full text-white text-2xl font-bold h-16`,
      },
      border: {
        none: `border-none`,
        sm: `border-2 border-gray-900`,
      },
    },
    defaultVariants: {
      size: 'normal',
      variant: 'secondary',
      border: 'none',
    },
  },
)

ButtonVariants.displayName = 'ButtonVariants'
