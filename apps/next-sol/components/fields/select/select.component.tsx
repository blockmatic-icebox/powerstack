import { cn } from '~/styles'

import { SelectComponentProps } from './select.type'

export function SelectField(props: SelectComponentProps) {
  const { label, id, extra, placeholder, variant, state, disabled = false, options } = props
  return (
    <div className={cn(extra ? extra : '')}>
      <h6 className="text-sm leading-6 text-navy-700 dark:text-white font-bold">{label}</h6>
      <select
        className={cn(
          'cursor-pointer w-full h-12 mt-2 px-2 text-sm font-bold text-navy-700 dark:!bg-navy-800 dark:text-white rounded-xl border bg-white/0 p-3 outline-none',
          disabled
            ? '!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]'
            : '',
        )}
        name={label}
        id={id}
        disabled={disabled}
        defaultValue={placeholder}
      >
        {options?.map((option, i) => {
          return (
            <option key={option + i} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}
