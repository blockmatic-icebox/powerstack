import { useState } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import { cn } from '~/styles'

export function InputField(props: {
  label: string
  id: string
  extra?: string
  type: string
  placeholder?: string
  variant?: string
  state?: string
  disabled?: boolean
  value?: string
  required?: boolean
  name?: string
  icon?: JSX.Element
  register?: UseFormRegister<FieldValues>
  error?: string
  formState?: FieldErrors<FieldValues>
}) {
  const {
    label,
    id,
    extra,
    type,
    placeholder,
    variant,
    state,
    disabled = false,
    value,
    required = false,
    name,
    icon,
    formState,
    register,
    error,
  } = props

  const [input, setInput] = useState(value)

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-white ${
          variant === 'auth' ? 'ml-1.5 font-medium' : 'font-bold'
        }`}
      >
        {label}
        {required ? <span className="ml-2 text-red-600">*</span> : null}
      </label>
      <div className={cn(icon ? 'flex relative' : '')}>
        {icon ? icon : null}
        {register && formState ? (
          <input
            {...register(name!, { required: required })}
            aria-invalid={formState[name!] ? 'true' : 'false'}
            disabled={disabled}
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            className={
              cn(
                'mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white',
                icon ? 'pl-12' : '',
                disabled
                  ? '!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]'
                  : '',
              )
              /* disabled === true
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : state === "error"
              ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
              : state === "success"
              ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400" 
              : */
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        ) : (
          <input
            disabled={disabled}
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            className={
              cn(
                'mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white',
                icon ? 'pl-12' : '',
                disabled
                  ? '!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]'
                  : '',
              )
              /* disabled === true
              ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
              : state === "error"
              ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
              : state === "success"
              ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400" 
              : */
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        )}
        {formState && name
          ? formState[name] && <p className="text-red-600">{label} is a required field</p>
          : null}
        {error ? <p className="text-red-600">{error} </p> : null}
      </div>
    </div>
  )
}
