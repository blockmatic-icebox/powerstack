import { noop } from 'lodash'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiWallet } from 'react-icons/bi'
import { BsBell } from 'react-icons/bs'
import { BsCashStack } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'

// import { TbBinaryTree, TbBinaryTree2 } from 'react-icons/tb'
import { Message } from '~/components/message'
import { Notification } from '~/components/notification'
import { Popover } from '~/components/popover'
import { MessageGenqlSelection, NotificationGenqlSelection } from '~/graphql/generated/gwt'
import { useAuth } from '~/hooks/use-auth'
import { useBalance } from '~/hooks/use-balance'
import { useSolana } from '~/hooks/use-solana'
import { usdFormatter } from '~/lib/format'
import { getMessage } from '~/services/message'
import { getNotification } from '~/services/notification'

export function AppBarItems() {
  const { userUsdcBalance } = useSolana()
  const { userBidBalance } = useBalance()
  const [notificationData, setNotificationData] = useState<any>()
  const [messageData, setMessageData] = useState<any>()
  const { session } = useAuth()

  const items = [
    {
      icon: HiOutlineCurrencyDollar,
      text: usdFormatter({ value: userBidBalance / 100, decimals: 1 }),
      link: '/wallet',
      onClick: noop,
    },
    {
      icon: BiWallet,
      text: usdFormatter({ value: userUsdcBalance, decimals: 1 }),
      link: '/wallet',
      onClick: noop,
    },
    // {
    //   icon: TbBinaryTree,
    //   text: '$0',
    //   link: '/dashboard',
    //   onClick: noop,
    // },
    {
      icon: BsCashStack,
      text: '$0',
      link: '/dashboard',
      onClick: noop,
    },
    {
      icon: FiMessageSquare,
      amount: messageData?.length,
      type: 'message',
      onClick: noop,
    },
    {
      icon: BsBell,
      amount: notificationData?.length,
      onClick: noop,
    },
  ]

  useEffect(() => {
    const notifications = async () => {
      const { notification } = await getNotification({ userName: session?.user.username! })
      setNotificationData(notification as any)
    }

    const messages = async () => {
      const { message } = await getMessage({ userName: session?.user.username! })
      setMessageData(message as any)
    }
    notifications()
    messages()
  }, [session?.user.username])

  return (
    <>
      {items.map((item, index) => {
        return (
          <Link href={item.link || ''} key={index}>
            <button
              type="button"
              className="relative inline-flex items-center p-1 text-sm font-medium text-center text-neutral-400 hover:text-neutral-700"
            >
              {item.text ? <span className="mr-1">{item.text}</span> : null}

              {item.amount ? (
                <Popover
                  header={
                    <item.icon
                      size={24}
                      className="transition duration-500 text-neutral-400 hover:text-neutral-700"
                    />
                  }
                >
                  {item.type === 'message' ? (
                    <Message message={messageData} />
                  ) : (
                    <Notification notification={notificationData} />
                  )}
                </Popover>
              ) : (
                <item.icon
                  size={24}
                  className="transition duration-500 text-neutral-400 hover:text-neutral-700"
                />
              )}

              {item.amount ? (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-700 border-2 border-green-700 rounded-full -top-2 -right-2 dark:border-gray-900">
                  {item.amount}
                </div>
              ) : null}
            </button>
          </Link>
        )
      })}
    </>
  )
}
