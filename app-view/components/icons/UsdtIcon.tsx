import * as React from 'react'
import type { Token } from '@stitches/react/types/theme'

const UsdtIcon: React.FC<React.SVGProps<SVGSVGElement & { color?: Token<any, string, "colors", ""> | string }>> = ({ color = '#fefefe',...props }) => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill={'none'} { ...props }>
  <g id="Grupo 43878">
    <path id="Elipse 1541" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill={color as string} />
    <path id="Trazado 78750" d="M23.467 17.0051V13.8751H30.629V9.10107H11.129V13.8741H18.292V17.0031C12.471 17.2701 8.09204 18.4241 8.09204 19.8031C8.09204 21.1821 12.47 22.3361 18.292 22.6031V32.6331H23.468V22.6051C36.961 21.9421 36.951 17.6681 23.467 17.0051Z" fill={color as string} />
    <path id="Trazado 78751" d="M23.4679 21.7538C19.9799 22.0538 9.27394 21.4678 9.30794 19.5618C9.30794 18.4918 13.1469 17.5958 18.2909 17.3618V20.8618C20.0154 20.9524 21.7435 20.9524 23.4679 20.8618V17.3618C35.3539 17.9308 35.3539 21.1928 23.4679 21.7538Z" fill={color as string} />
  </g>
</svg>
)

export default UsdtIcon
