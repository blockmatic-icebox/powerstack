import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Blockmatic" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Blockmatic</title>
        </Head>
        <body className="w-full h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
