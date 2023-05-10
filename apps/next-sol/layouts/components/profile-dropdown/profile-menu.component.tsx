import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { BiGlobe } from 'react-icons/bi'
import { BsCoin } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { GoSignOut } from 'react-icons/go'
import { MdDashboard } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useAsyncFn from 'react-use/lib/useAsyncFn'

import { Dropdown } from '~/components/dropdown'
import { useAuth } from '~/hooks/use-auth'
import anon from '~/public/images/avatars/anon.webp'
import avatar from '~/public/images/avatars/avatar4.png'
import { cn } from '~/styles'

export function ProfileMenu() {
  const { session, signOut, signIn } = useAuth()
  const [state, callSignIn] = useAsyncFn(signIn)

  useEffect(() => {
    if (state.error && !state.loading) {
      toast.error('No existe una cuenta asociada, por favor sigue el proceso en el botón de únete.')
    }
  }, [state])

  return (
    <div className="flex items-center justify-center flex-shrink-0 w-10 ml-2">
      {session ? (
        <Dropdown
          button={
            <Image
              className="w-full rounded-full object-cover cursor-pointer h-[40px]"
              src={session.user.image || avatar.src}
              alt="avatar"
              width={40}
              height={40}
            />
          }
          classNames="top-14 right-0 w-max"
          animation=""
        >
          <div className="flex h-max w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat pb-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
            <div className="mt-3 ml-4">
              <Link href={`/` + session.user.username}>
                <div className="flex items-center gap-3">
                  <Image
                    className="rounded-full cursor-pointer h-[40px] object-cover"
                    src={session.user.image || avatar.src}
                    alt="avatar"
                    width={40}
                    height={40}
                  />

                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    @{session?.user.username}
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-full h-px mt-3 bg-gray-200 dark:bg-white/20 " />
            <AppBarNav classname="w-full h-full px-4 py-3" />

            <div className="flex flex-col ml-4">
              <button
                className="flex items-center text-sm font-medium text-red-500 gap-x-3 hover:text-red-500"
                onClick={() => signOut()}
              >
                <GoSignOut />
                Sign Out
              </button>
            </div>
          </div>
        </Dropdown>
      ) : (
        <Image
          onClick={callSignIn}
          className="rounded-full cursor-pointer"
          src={anon}
          alt="avatar"
          width={40}
          height={40}
        />
      )}
      <ToastContainer />
    </div>
  )
}

export function AppBarNav({ classname }: { classname?: string }) {
  const { asPath } = useRouter()
  const { session } = useAuth()

  const navLinks = [
    {
      text: 'Profile',
      slug: '/' + session?.user.username,
      icon: <FaUserAlt />,
    },
    {
      text: 'Mercado',
      slug: '/mercado',
      icon: <BsCoin />,
    },
    {
      text: 'Dashboard',
      slug: '/dashboard',
      icon: <MdDashboard />,
    },
    {
      text: 'Admin',
      slug: '/admin',
      icon: <BiGlobe />,
    },
  ].filter((i) => i !== null)

  return (
    <div className={cn('flex flex-col gap-x-3 gap-y-3 no-scrollbar', classname ? classname : '')}>
      {navLinks.map((link) => {
        if (!session && link?.slug !== '/mercado') return null

        return (
          <Link
            href={link!.slug}
            key={link!.text}
            className={cn(
              'flex gap-x-3 items-center hover:text-primary-700dark:text-gray-600 dark:hover:text-white transition-all font-normal',
              link?.slug === asPath
                ? 'text-primary-700dark:text-gray-600 font-bold'
                : 'text-metal ',
            )}
          >
            {link.icon}
            {link!.text}
          </Link>
        )
      })}
    </div>
  )
}
