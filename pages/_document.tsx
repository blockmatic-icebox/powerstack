import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getGeneratedStylesheet } from '../ui/styles'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getGeneratedStylesheet() }} />
          <meta name="description" content="Blockmatic"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
