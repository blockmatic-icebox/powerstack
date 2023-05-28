import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className="bg-grayJade-700">
        <Head />
        <body className="w-full h-screen bg-grayJade-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
