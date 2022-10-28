import Link from "next/link";

export function Sidebar() {
    return (
    <div className="flex flex-col flex-grow mt-5">
        <nav className="flex-1 px-2 pb-4 space-y-1">
        <a href="/" className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md group">      
           Account
         </a>
         <Link href="/" className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group">
          + Connect new wallet
        </Link>
        <Link href="/profile" className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group">  
           Profile
         </Link>
         <Link href="/wallet" className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group">
           Wallet
         </Link>
         <Link href="marketplace" className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group">       
           Marketplace
         </Link>
         <Link href="" className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group">         
           Documents
         </Link>  
        </nav>
    </div>
  )}
  
  
  
  
 