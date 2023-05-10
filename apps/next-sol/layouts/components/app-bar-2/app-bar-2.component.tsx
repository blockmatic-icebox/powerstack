export function AppBar2() {
  return (
    <div className="border-b navbar navbar-1">
      <div className="flex items-center justify-start w-full navbar-inner">
        <button className="mx-4">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height={20}
            width={20}
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1={3} y1={12} x2={21} y2={12} />
            <line x1={3} y1={6} x2={21} y2={6} />
            <line x1={3} y1={18} x2={21} y2={18} />
          </svg>
        </button>
        <form
          className="w-full max-w-xs mr-2 navbar-search"
          data-dashlane-rid="92b48321d2e3d2bb"
          data-form-type
        >
          <div className="relative">
            <input
              type="search"
              name="search"
              placeholder="Search..."
              className="w-full h-10 pl-10 pr-5 text-sm rounded-full appearance-none focus:outline-none"
              data-dashlane-rid="a1f99c06b04e31ff"
              data-form-type
            />
            <button
              type="submit"
              className="absolute top-0 left-0 mt-3 ml-4"
              data-dashlane-rid="63abab0d980774d8"
              data-form-type
              data-dashlane-label="true"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 stroke-current"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </form>
        <div className="relative">
          <button className="h-16 bg-transparent btn btn-default btn-icon">
            <span className="mr-2">Explore</span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-current"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="absolute top-0 left-0 mt-16 dropdown ">
            <div className="dropdown-content w-128 bottom-start">
              <div className="flex flex-row flex-wrap">
                <div className="w-1/2 p-2 dropdown-item">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex-shrink-0 w-8">
                      <span className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-blue-500 rounded-full font-display">
                        01
                      </span>
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-bold">Teams</div>
                      <div className="text-xs">Minima quasi sunt.</div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-2 dropdown-item">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex-shrink-0 w-8">
                      <span className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-blue-500 rounded-full font-display">
                        02
                      </span>
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-bold">Blog</div>
                      <div className="text-xs">Possimus non dolor.</div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-2 dropdown-item">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex-shrink-0 w-8">
                      <span className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-blue-500 rounded-full font-display">
                        03
                      </span>
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-bold">Meetups</div>
                      <div className="text-xs">Cupiditate aliquid magnam.</div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-2 dropdown-item">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex-shrink-0 w-8">
                      <span className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-blue-500 rounded-full font-display">
                        04
                      </span>
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-bold">Advertise with us</div>
                      <div className="text-xs">Doloribus modi cum.</div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-2 dropdown-item">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex-shrink-0 w-8">
                      <span className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-blue-500 rounded-full font-display">
                        05
                      </span>
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-bold">Features</div>
                      <div className="text-xs">Voluptatum suscipit minima.</div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-2 dropdown-item">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex-shrink-0 w-8">
                      <span className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-blue-500 rounded-full font-display">
                        06
                      </span>
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-bold">Job board</div>
                      <div className="text-xs">Magnam quae quia.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="ml-auto" />
        <div className="relative hidden lg:flex">
          <button className="flex items-center justify-center w-12 h-16">
            <span className="text-base flag-icon flag-icon-us" />
          </button>
          <div className="absolute top-0 right-0 mt-16 dropdown ">
            <div className="w-64 dropdown-content bottom-start">
              <div className="dropdown-title">Change country</div>
              <div className="flex flex-wrap">
                <a
                  className="flex items-center justify-start w-1/2 p-2 space-x-2 text-sm dropdown-item"
                  href="/"
                >
                  <span className="text-base flag-icon flag-icon-br" />
                  <span>Brasil</span>
                </a>
                <a
                  className="flex items-center justify-start w-1/2 p-2 space-x-2 text-sm dropdown-item"
                  href="/"
                >
                  <span className="text-base flag-icon flag-icon-us" />
                  <span>USA</span>
                </a>
                <a
                  className="flex items-center justify-start w-1/2 p-2 space-x-2 text-sm dropdown-item"
                  href="/"
                >
                  <span className="text-base flag-icon flag-icon-es" />
                  <span>España</span>
                </a>
                <a
                  className="flex items-center justify-start w-1/2 p-2 space-x-2 text-sm dropdown-item"
                  href="/"
                >
                  <span className="text-base flag-icon flag-icon-ru" />
                  <span>Россия</span>
                </a>
                <a
                  className="flex items-center justify-start w-1/2 p-2 space-x-2 text-sm dropdown-item"
                  href="/"
                >
                  <span className="text-base flag-icon flag-icon-cn" />
                  <span>China</span>
                </a>
                <a
                  className="flex items-center justify-start w-1/2 p-2 space-x-2 text-sm dropdown-item"
                  href="/"
                >
                  <span className="text-base flag-icon flag-icon-in" />
                  <span>India</span>
                </a>
                <a
                  className="flex items-center justify-start w-1/2 p-2 space-x-2 text-sm dropdown-item"
                  href="/"
                >
                  <span className="text-base flag-icon flag-icon-ca" />
                  <span>Canada</span>
                </a>
                <a
                  className="flex items-center justify-start w-1/2 p-2 space-x-2 text-sm dropdown-item"
                  href="/"
                >
                  <span className="text-base flag-icon flag-icon-au" />
                  <span>Australia</span>
                </a>
                <a
                  className="flex items-center justify-start w-1/2 p-2 space-x-2 text-sm dropdown-item"
                  href="/"
                >
                  <span className="text-base flag-icon flag-icon-jp" />
                  <span>Japan</span>
                </a>
                <a
                  className="flex items-center justify-start w-1/2 p-2 space-x-2 text-sm dropdown-item"
                  href="/"
                >
                  <span className="text-base flag-icon flag-icon-kr" />
                  <span>Korea</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:flex">
          <button className="flex items-center justify-center w-12 h-16">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height={18}
              width={18}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1={12} y1="22.08" x2={12} y2={12} />
            </svg>
          </button>
          <div className="absolute top-0 right-0 mt-16 dropdown ">
            <div className="w-64 dropdown-content bottom-start">
              <div className="dropdown-title">Apps</div>
              <div className="flex flex-wrap text-center">
                <div className="flex flex-col items-center justify-center w-1/3 h-20 space-y-1 dropdown-item">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl text-gray-700 stroke-current"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span className="text-xs">Home</span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3 h-20 space-y-1 dropdown-item">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl text-blue-700 stroke-current"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  <span className="text-xs">Account</span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3 h-20 space-y-1 dropdown-item">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl text-orange-500 stroke-current"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="text-xs">Comments</span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3 h-20 space-y-1 dropdown-item">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl text-green-700 stroke-current"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={12} cy={12} r={3} />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  <span className="text-xs">Settings</span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3 h-20 space-y-1 dropdown-item">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl text-red-500 stroke-current"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                  <span className="text-xs">Maps</span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3 h-20 space-y-1 dropdown-item">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl stroke-current text-twitter"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  <span className="text-xs">Twitter</span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3 h-20 space-y-1 dropdown-item">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl stroke-current text-facebook"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="text-xs">Facebook</span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3 h-20 space-y-1 dropdown-item">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl stroke-current text-instagram"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className="text-xs">Instagram</span>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3 h-20 space-y-1 dropdown-item">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-xl stroke-current text-linkedin"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x={2} y={9} width={4} height={12} />
                    <circle cx={4} cy={4} r={2} />
                  </svg>
                  <span className="text-xs">LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:flex">
          <button className="relative flex items-center justify-center w-12 h-16">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height={18}
              width={18}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span
              className="absolute inline-flex items-center justify-center w-4 h-4 p-0 font-bold leading-none text-center text-white uppercase bg-blue-500 rounded-full text-2xs"
              style={{ top: 14, right: 8 }}
            >
              5
            </span>
          </button>
          <div className="absolute top-0 right-0 mt-16 dropdown ">
            <div className="w-64 dropdown-content bottom-start">
              <div className="dropdown-title">Project status</div>
              <div className="flex flex-col">
                <div className="flex flex-col p-2 dropdown-item">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold">Mobile app development</div>
                    <div className="text-xs whitespace-nowrap">33{/* */}%</div>
                  </div>
                  <div className="relative flex flex-row items-center w-full h-1 text-xs text-center">
                    <div
                      style={{ width: '33%' }}
                      className="top-0 left-0 w-full h-1 bg-green-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col p-2 dropdown-item">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold">Deploy github project</div>
                    <div className="text-xs whitespace-nowrap">50{/* */}%</div>
                  </div>
                  <div className="relative flex flex-row items-center w-full h-1 text-xs text-center">
                    <div
                      style={{ width: '50%' }}
                      className="top-0 left-0 w-full h-1 bg-yellow-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col p-2 dropdown-item">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold">Customer development</div>
                    <div className="text-xs whitespace-nowrap">66{/* */}%</div>
                  </div>
                  <div className="relative flex flex-row items-center w-full h-1 text-xs text-center">
                    <div style={{ width: '66%' }} className="top-0 left-0 w-full h-1 bg-red-500" />
                  </div>
                </div>
                <div className="flex flex-col p-2 dropdown-item">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold">Database backup</div>
                    <div className="text-xs whitespace-nowrap">25{/* */}%</div>
                  </div>
                  <div className="relative flex flex-row items-center w-full h-1 text-xs text-center">
                    <div
                      style={{ width: '25%' }}
                      className="top-0 left-0 w-full h-1 bg-indigo-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col p-2 dropdown-item">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-bold">Release version 1.4</div>
                    <div className="text-xs whitespace-nowrap">80{/* */}%</div>
                  </div>
                  <div className="relative flex flex-row items-center w-full h-1 text-xs text-center">
                    <div style={{ width: '80%' }} className="top-0 left-0 w-full h-1 bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:flex">
          <button className="flex items-center justify-center w-12 h-16">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height={18}
              width={18}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <div className="absolute top-0 right-0 mt-16 dropdown ">
            <div className="w-64 dropdown-content bottom-start">
              <div className="flex flex-row flex-wrap">
                <div className="w-full">
                  <div className="flex items-center justify-start p-2 dropdown-item">
                    <div className="ml-2">
                      <div className="text-sm font-bold">5 new sales</div>
                      <div className="text-xs">Atque quaerat libero maiores vel.</div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-start p-2 dropdown-item">
                    <div className="ml-2">
                      <div className="text-sm font-bold">$3.000 in average profits</div>
                      <div className="text-xs">Aut aut ullam eum possimus.</div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-start p-2 dropdown-item">
                    <div className="ml-2">
                      <div className="text-sm font-bold">200 new tweets</div>
                      <div className="text-xs">Fugiat praesentium soluta amet non.</div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-start p-2 dropdown-item">
                    <div className="ml-2">
                      <div className="text-sm font-bold">2 new items</div>
                      <div className="text-xs">Fugit eaque molestias et aut.</div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-start p-2 dropdown-item">
                    <div className="ml-2">
                      <div className="text-sm font-bold">51 registered users</div>
                      <div className="text-xs">Labore aut voluptas molestias illo.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <button className="relative flex w-8 h-16 ml-2 rounded-full">
            <span className="absolute top-0 left-0 pt-4">
              <img
                className="w-8 h-8 rounded-full shadow"
                src="/images/faces/m1.png"
                alt="avatar"
              />
              <span
                className="absolute inline-flex items-center justify-center w-4 h-4 p-0 font-bold leading-none text-center text-white uppercase bg-red-500 rounded-full text-2xs ring-white"
                style={{ top: 10, right: '-4px' }}
              >
                2
              </span>
            </span>
          </button>
          <div className="absolute top-0 right-0 mt-16 dropdown ">
            <div className="w-48 dropdown-content bottom-end">
              <div className="flex flex-col w-full">
                <ul className="list-none">
                  <li className="dropdown-item">
                    <a
                      className="flex flex-row items-center justify-start w-full h-10 px-2"
                      href="/"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current"
                        height={18}
                        width={18}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span className="mx-2">Inbox</span>
                      <span className="inline-flex items-center justify-center w-4 h-4 p-0 ml-auto font-bold leading-none text-center text-white uppercase bg-red-500 rounded-full text-2xs">
                        2
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      className="flex flex-row items-center justify-start w-full h-10 px-2"
                      href="/"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current"
                        height={18}
                        width={18}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="mx-2">Messages</span>
                      <span className="inline-flex items-center justify-center w-4 h-4 p-0 ml-auto font-bold leading-none text-center text-white uppercase bg-blue-500 rounded-full text-2xs">
                        3
                      </span>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      className="flex flex-row items-center justify-start w-full h-10 px-2"
                      href="/extras/user-profile"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current"
                        height={18}
                        width={18}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span className="mx-2">Profile</span>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a
                      className="flex flex-row items-center justify-start w-full h-10 px-2"
                      href="/pages/logout"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-current"
                        height={18}
                        width={18}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                        <polyline points="10 17 15 12 10 7" />
                        <line x1={15} y1={12} x2={3} y2={12} />
                      </svg>
                      <span className="mx-2">Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center w-8 h-16 mx-4 btn-transparent">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height={18}
            width={18}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={12} cy={12} r={3} />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
