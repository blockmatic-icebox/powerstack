import { debounce } from 'lodash'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeEventHandler, useCallback, useEffect, useRef } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useSetState } from 'react-use'

import avatar from '~/public/images/avatars/avatar4.png'
import { searchPeople } from '~/services/account'

import { SearchStateProps } from './search-bar.type'

export function SearchBar() {
  const [state, setState] = useSetState<SearchStateProps>({
    isOpen: false,
    searchResult: [],
    textToSearch: '',
  })

  const resultRef = useRef<HTMLParagraphElement>(null)
  const searchRef = useRef<HTMLParagraphElement>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    debounce(async ({ term }: { term: string }) => {
      const { account } = await searchPeople({ search: term })

      if (account && account.length > 0) setState({ searchResult: account.slice(0, 7) })
      setState({ isOpen: true })
    }, 500),
    [],
  )

  const updateTerm: ChangeEventHandler<HTMLInputElement> = (event) => {
    setState({
      textToSearch: event.currentTarget.value,
    })
  }

  const clickOutside = (event: { target: any }) => {
    if (
      resultRef.current &&
      ((resultRef.current as any).contains(event.target) ||
        (searchRef.current as any).contains(event.target))
    )
      return
    setState({
      isOpen: false,
    })
  }

  useEffect(() => {
    if (state.textToSearch.trim().length < 2) {
      setState({
        searchResult: [],
      })
      return
    }

    debounceSearch({ term: state.textToSearch })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.textToSearch])

  useEffect(() => {
    addEventListener('mousedown', clickOutside)
    return () => removeEventListener('mousedown', clickOutside)
  })

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="w-full h-10 pl-10 pr-5 text-sm border-neutral-400 focus:ring-neutral-500 focus:!border-neutral-500 rounded-full appearance-none "
          value={state.textToSearch}
          onChange={updateTerm}
          onFocus={(e) => {
            if (!e.currentTarget.value) return
            setState({ isOpen: true })
          }}
        />
        <IoSearchOutline className="absolute top-0 left-0 mt-3 ml-4 cursor-pointer" />
      </div>

      {state.isOpen ? (
        <div
          className="absolute z-50 w-full bg-white rounded-lg top-[3.25rem] focus:outline-none"
          ref={resultRef}
          tabIndex={-3}
        >
          <ul
            className="px-1 py-2 overflow-y-auto border border-gray-200 rounded-lg max-h-44"
            tabIndex={-2}
          >
            {!state.searchResult || state.searchResult.length === 0 ? (
              <div className="pl-3 text-sm">
                <>Is not found: {state.textToSearch}</>
              </div>
            ) : null}

            {state.searchResult.map((item) => (
              <li key={`result-${item.username}-${nanoid()}`} tabIndex={0}>
                <Link href={`/${item.username}`}>
                  <button
                    onClick={() => setState({ textToSearch: '', isOpen: false })}
                    tabIndex={-1}
                    className="flex gap-3 items-center w-full px-3 py-2 text-sm text-left rounded cursor-pointer group-focus:text-primary-purple focus:bg-slate-100 hover:text-primary-purple hover:bg-slate-100 "
                  >
                    <Image
                      className="rounded-full object-cover h-[24px]"
                      src={item.image || avatar.src}
                      alt="avatar"
                      width={24}
                      height={24}
                    />
                    {item.username}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
