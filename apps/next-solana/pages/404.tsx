import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div className="flex flex-col w-full justify-center items-center h-screen gap-4 p-2">
      <h2 className="text-4xl text-center">404 - Page Not Found</h2>
      <Link
        className="rounded-[20px] px-4 py-2 text-base hover:bg-gray-600/80 font-medium text-white transition duration-200 flex justify-center items-center bg-gray-600 cursor-point"
        href="/"
      >
        Go back home
      </Link>
    </div>
  )
}
