import { ActionButtonsProps } from './action-buttons.type'

export const ActionButtons = ({ mb, date, sum, name, action, actionName }: ActionButtonsProps) => {
  return (
    <div className={`flex items-center justify-between ${mb}`}>
      <div className="hover:cursor-pointer">
        <p className="text-base font-bold text-navy-700 dark:text-white">{date}</p>
        <p className="text-sm text-gray-600"> {name} </p>
      </div>
      <div className="flex items-center gap-3 hover:cursor-pointer">
        <p className="text-md font-medium text-navy-700 dark:text-white">{sum}</p>
        <button
          onClick={action}
          className="flex items-center justify-center rounded-full bg-lightPrimary px-5 py-3 text-sm font-medium text-brand-500 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          {actionName}
        </button>
      </div>
    </div>
  )
}
