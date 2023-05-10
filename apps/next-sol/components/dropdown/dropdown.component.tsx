import { LegacyRef, MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react'

import { DropdownContainer } from './dropdown.type'

export function useOutsideAlerter(
  ref: MutableRefObject<HTMLDivElement | null>,
  setX: React.Dispatch<React.SetStateAction<boolean>>,
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        setX(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, setX])
}

export function Dropdown(props: {
  animation: string
  button: JSX.Element
  classNames: string
  children: ReactNode
}) {
  const { animation, button, classNames } = props
  const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const [openWrapper, setOpenWrapper] = useState(false)
  useOutsideAlerter(wrapperRef, setOpenWrapper)

  return (
    <div ref={wrapperRef} className="relative flex">
      <div className="flex" onMouseDown={() => setOpenWrapper(!openWrapper)}>
        {button}
      </div>
      <div
        className={`${classNames} absolute z-10 ${
          animation ? animation : 'origin-top-right transition-all duration-300 ease-in-out'
        } ${openWrapper ? 'scale-100' : 'scale-0'}`}
      >
        {props.children}
      </div>
    </div>
  )
}
