import { SetupProps } from './set-up.type'

export const SetUp = ({ value, name, py, actionName, border }: SetupProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-between dark:!border-white/10 md:flex-row ${py} ${border} `}
    >
      <p className="text-base font-bold text-navy-700 dark:text-white md:mb-0"> {name} </p>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <p className="mb-3 text-base font-medium text-gray-600 md:!mb-0 md:mr-7"> {value} </p>
        <button className="flex items-center justify-center rounded-[20px] border px-5 py-1.5 text-base font-medium text-navy-700 transition duration-200 hover:cursor-pointer hover:bg-lightPrimary active:bg-gray-200 dark:!border-none dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          {actionName}
        </button>
      </div>
    </div>
  )
}
