import { Switch } from 'components/switch'

import { cn } from '~/styles'

export function SwitchField(props: {
  id: string
  label: string
  desc: string
  mt: string
  mb: string
}) {
  const { id, label, desc, mt, mb } = props
  return (
    <div className={cn(`flex justify-between items-center`, mt ? mt : '', mb ? mb : '')}>
      <label htmlFor={id} className="max-w-[80%] hover:cursor-pointer lg:max-w-[65%]">
        <h5 className="text-base font-bold text-navy-700 dark:text-white">{label}</h5>
        <p className={`text-base text-gray-600`}>{desc}</p>
      </label>
      <div>
        <Switch />
      </div>
    </div>
  )
}
