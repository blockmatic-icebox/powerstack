const crypto = [
  {
    name: 'Tether',
    abbreviation: 'USDT',
    balance: '9,500 USDT',
    price: '1,00 US$',
    change: '-0.01%',
    icon: 'https://via.placeholder.com/150',
  },
  {
    name: 'Solana',
    abbreviation: 'SOL',
    balance: '500 SOL',
    price: '2,00 US$',
    change: '-0.03%',
    icon: 'https://via.placeholder.com/150',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const tabs = [
  { name: 'Tokens', href: '#', current: true },
  { name: 'NFTs assets', href: '#', current: false },
]

export default function Wallet() {
  return (
    <div>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue=""
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap font-sans py-4 px-1 border-b-2 font-medium text-sm',
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <h1 className="font-sans text-xl font-bold text-gray-900">Your wallet</h1>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="px-4 py-6 bg-gray-50 sm:flex-auto">
            <h2 className="font-sans text-xl font-medium text-gray-900">Total balance</h2>
            <p className="mt-2 font-sans text-3xl font-bold text-gray-700">10.000 US$</p>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-sans font-semibold text-gray-900 sm:pl-6"
                      >
                        Cryptocurrency
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-sans font-semibold text-gray-900"
                      >
                        Balance
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-sans font-semibold text-gray-900"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-sans font-semibold text-gray-900"
                      >
                        1h Change
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-sans font-semibold text-gray-900"
                      >
                        Send
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {crypto.map((coin) => (
                      <tr className="border-b-2 border-b-gray-100" key={coin.name}>
                        <td className="py-4 pl-4 pr-3 text-sm whitespace-nowrap sm:pl-6">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img className="w-10 h-10 rounded-full" src={coin.icon} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="font-sans font-bold text-gray-900">{coin.name}</div>
                              <div className="font-sans text-xs text-gray-400">
                                {coin.abbreviation}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="font-sans font-bold text-blue-600">{coin.balance}</div>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <span className="inline-flex px-2 font-sans text-xs font-bold leading-5">
                            {coin.price}
                          </span>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <span className="inline-flex px-2 font-sans text-xs font-bold leading-5 text-red-500">
                            {coin.change}
                          </span>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <a href="#" className="font-sans font-bold text-blue-600">
                            Transfer Now
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
