import { InputField } from '~/components/fields/inputField'
import { WizardStepProps } from '~/components/wizard'

export function CardStep({ next }: WizardStepProps) {
  return (
    <div>
      <form className="flex flex-wrap w-full gap-3 p-5">
        <InputField
          extra="mb-3 w-full"
          label="Card number"
          placeholder="0000 0000 0000"
          name="card_number"
          id="card_number"
          type="text"
          required
          icon={
            <svg
              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-300 peer-placeholder-shown:text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          }
        />
        <InputField
          extra="mb-3 w-full flex-1"
          label="Expire date"
          placeholder="MM/YY"
          name="expire_date"
          id="expire_date"
          type="text"
          required
          icon={
            <svg
              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
        />
        <InputField
          extra="mb-3 w-full flex-1"
          label="CVC/CVV"
          placeholder="MM/YY"
          name="card_cvc"
          id="card_cvc"
          type="text"
          required
          icon={
            <svg
              className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-gray-300 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        />

        {/* <label className="relative flex flex-col flex-1">
          <span className="flex items-center gap-3 mb-3 font-bold">
            CVC/CVV
            <span className="relative group">
              <span className="absolute items-center justify-center hidden px-2 py-1 text-xs text-white transform translate-x-full -translate-y-1/2 bg-black group-hover:flex -right-2 w-max top-1/2">
                {' '}
                Hey ceci est une infobulle !
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </span>
          <input
            className="py-2 pl-12 pr-2 placeholder-gray-300 border-2 border-gray-200 rounded-md peer"
            type="text"
            name="card_cvc"
            placeholder="&bull;&bull;&bull;"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </label> */}
      </form>
      <button
        onClick={next}
        className="w-full py-3 mt-4 text-base font-medium text-white transition duration-200 rounded-xl bg-primary-500 hover:bg-primary-600 active:bg-primary-700 dark:bg-primary-400 dark:text-white dark:hover:bg-primary-300 dark:active:bg-primary-200"
      >
        Acceder
      </button>
    </div>
  )
}
