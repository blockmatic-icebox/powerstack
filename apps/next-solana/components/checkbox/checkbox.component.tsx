import { cn } from '~/styles'

import { CheckboxProps } from './checkbox.type'

export function Checkbox({
  extra,
  color,
  id,
  variant,
  label,
  required,
  register,
  name,
  formState,
  error,
  ...rest
}: CheckboxProps) {
  return (
    <div className={cn('relative', extra)}>
      <div className="flex relative">
        {register && formState ? (
          <input
            type="checkbox"
            id={id}
            {...register(name!, { required: required })}
            aria-invalid={formState[name!] ? 'true' : 'false'}
            className={cn(
              `defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px]
            appearance-none items-center justify-center rounded-md border border-gray-300
            text-white/0 outline-none transition duration-[0.2s]checked:border-none 
            checked:text-white hover:cursor-pointer dark:border-white/10`,
              extra ? extra : '',
              color === 'red'
                ? 'checked:border-none checked:bg-red-500 dark:checked:bg-red-400'
                : color === 'blue'
                ? 'checked:border-none checked:bg-blue-500 dark:checked:bg-blue-400'
                : color === 'green'
                ? 'checked:border-none checked:bg-green-500 dark:checked:bg-green-400'
                : color === 'yellow'
                ? 'checked:border-none checked:bg-yellow-500 dark:checked:bg-yellow-400'
                : color === 'orange'
                ? 'checked:border-none checked:bg-orange-500 dark:checked:bg-orange-400'
                : color === 'teal'
                ? 'checked:border-none checked:bg-teal-500 dark:checked:bg-teal-400'
                : color === 'navy'
                ? 'checked:border-none checked:bg-navy-500 dark:checked:bg-navy-400'
                : color === 'lime'
                ? 'checked:border-none checked:bg-lime-500 dark:checked:bg-lime-400'
                : color === 'cyan'
                ? 'checked:border-none checked:bg-cyan-500 dark:checked:bg-cyan-400'
                : color === 'pink'
                ? 'checked:border-none checked:bg-pink-500 dark:checked:bg-pink-400'
                : color === 'purple'
                ? 'checked:border-none checked:bg-purple-500 dark:checked:bg-purple-400'
                : color === 'amber'
                ? 'checked:border-none checked:bg-amber-500 dark:checked:bg-amber-400'
                : color === 'indigo'
                ? 'checked:border-none checked:bg-indigo-500 dark:checked:bg-indigo-400'
                : color === 'gray'
                ? 'checked:border-none checked:bg-gray-500 dark:checked:bg-gray-400'
                : 'checked:!bg-primary-500 dark:checked:bg-primary-400',
            )}
            name={name}
            {...rest}
          />
        ) : (
          <input
            type="checkbox"
            id={id}
            className={cn(
              `defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px]
            appearance-none items-center justify-center rounded-md border border-gray-300
            text-white/0 outline-none transition duration-[0.2s]checked:border-none 
            checked:text-white hover:cursor-pointer dark:border-white/10`,
              extra ? extra : '',
              color === 'red'
                ? 'checked:border-none checked:bg-red-500 dark:checked:bg-red-400'
                : color === 'blue'
                ? 'checked:border-none checked:bg-blue-500 dark:checked:bg-blue-400'
                : color === 'green'
                ? 'checked:border-none checked:bg-green-500 dark:checked:bg-green-400'
                : color === 'yellow'
                ? 'checked:border-none checked:bg-yellow-500 dark:checked:bg-yellow-400'
                : color === 'orange'
                ? 'checked:border-none checked:bg-orange-500 dark:checked:bg-orange-400'
                : color === 'teal'
                ? 'checked:border-none checked:bg-teal-500 dark:checked:bg-teal-400'
                : color === 'navy'
                ? 'checked:border-none checked:bg-navy-500 dark:checked:bg-navy-400'
                : color === 'lime'
                ? 'checked:border-none checked:bg-lime-500 dark:checked:bg-lime-400'
                : color === 'cyan'
                ? 'checked:border-none checked:bg-cyan-500 dark:checked:bg-cyan-400'
                : color === 'pink'
                ? 'checked:border-none checked:bg-pink-500 dark:checked:bg-pink-400'
                : color === 'purple'
                ? 'checked:border-none checked:bg-purple-500 dark:checked:bg-purple-400'
                : color === 'amber'
                ? 'checked:border-none checked:bg-amber-500 dark:checked:bg-amber-400'
                : color === 'indigo'
                ? 'checked:border-none checked:bg-indigo-500 dark:checked:bg-indigo-400'
                : color === 'gray'
                ? 'checked:border-none checked:bg-gray-500 dark:checked:bg-gray-400'
                : 'checked:!bg-primary-500 dark:checked:bg-primary-400',
            )}
            name={name}
            {...rest}
          />
        )}
        <label
          htmlFor={id}
          className="ml-2 text-sm text-navy-700 dark:text-white hover:cursor-pointer"
        >
          {label}
          {required ? <span className="ml-2 text-red-600">*</span> : null}
        </label>
      </div>
      {formState && name
        ? formState[name] && <p className="text-red-600">Debe marcar esta casilla</p>
        : null}
      {error ? <p className="text-red-600">{error.message} </p> : null}
    </div>
  )
}
