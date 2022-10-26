export function Header() {
    return(
        <div className="sticky top-0 z-10 flex h-20 flex-shrink-0 bg-white shadow">
            <button type="button" className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                <span className="sr-only">Open sidebar</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
            </button>

            <div className="flex flex-1  px-4 m-3">
                <h2 className="text-2xl font-semibold text-gray-900">Header</h2>
            </div>
        </div>
  
  )}