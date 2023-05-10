import Image from 'next/image'

import { useGlobalContext } from '~/context/global'

export function SuccessStep() {
  const { setGlobalState } = useGlobalContext()
  return (
    <div className="flex flex-col space-y-5 text-center text-navy-700 dark:text-white">
      <h1 className="font-sans font-bold text-primary">Verificación de Correo Electrónico</h1>
      <br />
      <p>Te hemos envíado un correo con un link secreto para activar to cuenta GWT.</p>
      <Image className="self-center" src="/images/email-sent.png" alt="" height={300} width={300} />
      <button
        onClick={() => setGlobalState({ showSignUp: false })}
        className="w-full py-3 mt-4 text-base font-medium text-white transition duration-200 rounded-xl bg-primary-500 hover:bg-primary-600 active:bg-primary-700 dark:bg-primary-400 dark:text-white dark:hover:bg-primary-300 dark:active:bg-primary-200"
      >
        OK
      </button>
    </div>
  )
}
