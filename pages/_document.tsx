import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import HeadTitle from 'next/head'
import { getGeneratedStylesheet } from '../app-view/styles'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <HeadTitle>
            <style id="stitches" dangerouslySetInnerHTML={{ __html: getGeneratedStylesheet() }} />
            <title>Blockmatic</title>
            <meta name="description" content="Blockmatic"></meta>
          </HeadTitle>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
