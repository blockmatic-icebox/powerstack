import { usdFormatter } from '~/lib/format'

import { BuyPackageButton } from './buy-package-button'
import { PackageCardProps } from './package-card.type'

export function PackageCard({ name, description, price, benefits, id }: PackageCardProps) {
  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {description ||
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
      </p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">{usdFormatter({ value: price / 100 })}</span>
        <span className="text-gray-500 dark:text-gray-400">+ VAT</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {benefits.map((benefit: string) => {
          return (
            <li key={benefit} className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{benefit}</span>
            </li>
          )
        })}
      </ul>
      <BuyPackageButton packageId={id} packagePrice={price} />
    </div>
  )
}
