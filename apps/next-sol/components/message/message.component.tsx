import { MessageGenqlSelection } from '~/graphql/generated/gwt'
import { useAuth } from '~/hooks/use-auth'

export function Message({ message }: { message: any }) {
  const { session } = useAuth()
  return (
    <div>
      {message.map((item: any, index: number) => (
        <p
          key={index}
          className="px-3 py-2 text-sm text-left rounded cursor-pointer group-focus:text-primary-purple focus:bg-slate-100 hover:text-primary-purple hover:bg-slate-100 "
        >
          <span className="font-bold text-neutral-800">{session?.user.name} </span>
          tienes un mensaje de{' '}
          <span className="font-bold text-neutral-800">{item.sender?.name}</span>
        </p>
      ))}
    </div>
  )
}
