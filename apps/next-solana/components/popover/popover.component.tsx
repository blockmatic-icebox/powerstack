import React, { ReactNode } from 'react'
import { VscClose } from 'react-icons/vsc'

import * as PopoverRadix from '@radix-ui/react-popover'

export const Popover = ({ children, header }: { children: ReactNode; header: ReactNode }) => (
  <PopoverRadix.Root>
    <PopoverRadix.Trigger asChild>
      <span aria-label="Update dimensions">{header}</span>
    </PopoverRadix.Trigger>
    <PopoverRadix.Portal>
      <PopoverRadix.Content className="PopoverContent" sideOffset={5}>
        {children}
        <PopoverRadix.Close className="PopoverClose" aria-label="Close">
          <VscClose />
        </PopoverRadix.Close>
        <PopoverRadix.Arrow className="PopoverArrow" />
      </PopoverRadix.Content>
    </PopoverRadix.Portal>
  </PopoverRadix.Root>
)
