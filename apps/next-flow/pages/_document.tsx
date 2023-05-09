import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="w-screen h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
