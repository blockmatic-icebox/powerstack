import { useAuth } from '~/hooks/use-auth'

export function Notification({ notification = [] }: { notification: any }) {
  const { session } = useAuth()
  return (
    <div>
      {notification.map((item: any, index: number) => (
        <p
          key={index}
          className="px-3 py-2 text-sm text-left rounded cursor-pointer group-focus:text-primary-purple focus:bg-slate-100 hover:text-primary-purple hover:bg-slate-100 "
        >
          <span className="font-bold text-neutral-800">{session?.user.name}</span> {item.message}
        </p>
      ))}
    </div>
  )
}
