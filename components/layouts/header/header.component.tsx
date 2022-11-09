export function Header() {
    return(
        <div className="sticky top-0 z-10 flex flex-shrink-0 h-20 bg-white shadow">
            <button type="button" className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
            </button>

            <div className="flex flex-1 px-4 m-3">
                <h2 className="text-2xl font-semibold text-gray-900">Header</h2>
            </div>
        </div>
  
  )}