import React from "react"

export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>     
          {children}
      </div>
    )
  }
  