export function Sidebar() {
    return (
    <div className="flex flex-col flex-grow mt-5">
        <nav className="flex-1 px-2 pb-4 space-y-1">
        <a href="#" className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md group">      
           Account
         </a>
         <a href="" className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group">  
          + Connect new wallet
        </a> 
         <a href="/profile" className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group">   
           Profile
         </a>
         <a href="/wallet" className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group">
           Wallet
         </a>
         <a href="marketplace" className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group">       
           Marketplace
         </a>
         <a href="/otro" className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group">         
           Documents
         </a>  
        </nav>
    </div>
  )}
  
  
  
  
 