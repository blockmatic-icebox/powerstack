import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAsyncFn } from 'react-use'

import { faker } from '@faker-js/faker'

import { Checkbox } from '~/components/checkbox'
import { InputField } from '~/components/fields/inputField'
import { WizardStepProps } from '~/components/wizard'
import { useGlobalContext } from '~/context/global'
import { useAuth } from '~/hooks/use-auth'
import { GoogleIcon, PhantomIcon } from '~/icons'
import { fetchJson } from '~/lib/fetch'
import { getAccountbyUsername, validateUser } from '~/services/account'

export function DataStep({ next }: WizardStepProps) {
  const router = useRouter()
  const { setGlobalState } = useGlobalContext()
  const { signIn } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [dbErrors, setDbErrors] = useState({
    username: false,
    phone: false,
    email: false,
  })

  const [state, onSubmit] = useAsyncFn(async (data: any) => {
    const dataExist = await validateUser(data.username, data.email, data.number)
    if (dataExist.email || dataExist.phone || dataExist.username) {
      setDbErrors({
        username: dataExist.username ? true : false,
        phone: dataExist.phone ? true : false,
        email: dataExist.email ? true : false,
      })
      // // console.log(dataExist)
      return
    }
    const ref = router.query.ref as string
    const binaryPlacement = (router.query.placement as string) || 'right'
    const parentId = ref ? (await getAccountbyUsername(ref)).account.id : null

    await fetchJson('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: data.firstname,
        email: data.email,
        username: data.username,
        phone: data.number,
        wallet: '',
        image: faker.internet.avatar(),
        bio: '',
        parentId,
        binaryPlacement,
      }),
    })

    next()
  })

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Sign up section */}
        <div className="flex-col w-full max-w-full ">
          {/* user info */}
          <div className="justify-center w-full gap-4 mb-3 sm:flex">
            <div className="sm:w-1/2">
              <InputField
                variant="auth"
                extra="mb-3"
                label="Nombre completo"
                placeholder="Gabo Esquivel"
                id="firstname"
                name="firstname"
                type="text"
                required
                register={register}
                formState={errors}
              />
            </div>

            <div className="sm:w-1/2">
              <InputField
                variant="auth"
                extra="mb-3"
                label="Nombre de usuario"
                placeholder="gaboesquivel"
                id="username"
                name="username"
                type="text"
                required
                register={register}
                formState={errors}
                error={dbErrors.username ? 'Username is already taken' : ''}
              />
            </div>
          </div>
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email"
            placeholder="hello@blockmatic.io"
            id="email"
            name="email"
            type="email"
            required
            register={register}
            formState={errors}
            error={dbErrors.email ? 'Email is already associated with an account' : ''}
          />
          {/* Número de Teléfono */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Número de teléfono"
            placeholder="+50670367089"
            id="number"
            name="number"
            type="text"
            required
            register={register}
            formState={errors}
            error={dbErrors.phone ? 'Phone is already associated with an account' : ''}
          />
          {/* Checkbox */}
          <div className="flex justify-between mt-4">
            <div className="flex">
              <Checkbox
                id="checkbox"
                label="Al crear una cuenta, significa que acepta los Términos y Condiciones y nuestra
              Política de Privacidad"
                name="acceptTerms"
                required
                formState={errors}
                register={register}
              />
            </div>
          </div>

          {/* button */}

          <button
            disabled={state.loading}
            type="submit"
            className="w-full py-3 mt-4 text-base font-medium text-white transition duration-200 rounded-xl bg-primary-500 hover:bg-primary-600 active:bg-primary-700 dark:bg-primary-400 dark:text-white dark:hover:bg-primary-300 dark:active:bg-primary-200"
          >
            {!state.loading ? 'Crear Cuenta' : 'Creando cuenta ...'}
          </button>

          {state.error ? <pre>{JSON.stringify(state.error)}</pre> : null}
        </div>
      </form>
      <div>
        <div className="relative my-8 border border-neutral-300">
          <p className="absolute top-0 bottom-0 left-0 right-0 px-2 m-auto bg-white w-min h-min ">
            Usuario
          </p>
        </div>

        <button
          disabled={state.loading}
          onClick={() => {
            signIn()
            setGlobalState({ showSignUp: false })
          }}
          className="flex justify-center w-full py-3 mt-4 text-base font-medium text-black transition duration-200 bg-white border space-x-7 border-primary-400 rounded-xl hover:bg-neutral-200 active:bg-neutral-300 dark:bg-neutral-400 dark:text-white dark:hover:bg-neutral-300 dark:active:bg-neutral-200"
        >
          <PhantomIcon />
          <p>Inicia sesión con Wallet</p>
        </button>

        {/* <button className="flex justify-center w-full py-3 mt-4 text-base font-medium text-black transition duration-200 bg-white border space-x-7 border-primary-400 rounded-xl hover:bg-neutral-200 active:bg-neutral-300 dark:bg-neutral-400 dark:text-white dark:hover:bg-neutral-300 dark:active:bg-neutral-200">
          <GoogleIcon />
          <p>Inicia sesión con Google</p>
        </button> */}
      </div>
    </div>
  )
}
