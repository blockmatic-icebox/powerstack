// @ts-check

/**
 * @typedef {Object} Summary
 * @prop {number} performance
 * @prop {number} accessibility
 * @prop {number} best-practices
 * @prop {number} seo
 * @prop {number} pwa
 */

/**
 * @typedef {Object} Manifest
 * @prop {string} url
 * @prop {boolean} isRepresentativeRun
 * @prop {string} htmlPath
 * @prop {string} jsonPath
 * @prop {Summary} summary
 */

/**
 * @typedef {Object} LighthouseOutputs
 * @prop {Record<string, string>} links
 * @prop {Manifest[]} manifest
 */

const formatScore = (/** @type { number } */ score) => Math.round(score * 100)
const emojiScore = (/** @type { number } */ score) =>
  score >= 0.9 ? '🟢' : score >= 0.5 ? '🟠' : '🔴'

const scoreRow = (/** @type { string } */ label, /** @type { number } */ score) =>
  `| ${emojiScore(score)} ${label} | ${formatScore(score)} |`

const fs = require('fs')
const path = require('path')

function makeComment() {
  //let rawInfo = fs.readFileSync(path.resolve(__dirname, '../../manifest.json'))
  //let info = require('../../manifest.json')

  //console.log('lighthouseOutputs', JSON.stringify(info))

  //   const summary = info[0].summary
  //   const link = lighthouseOutputs.manifest[0].url

  //   const comment = `## ⚡️🏠 Lighthouse report

  //  We ran Lighthouse against the changes and produced this summary:

  //  | Category | Score |
  //  | -------- | ----- |
  //  ${scoreRow('Performance', summary.performance)}
  //  ${scoreRow('Accessibility', summary.accessibility)}
  //  ${scoreRow('Best practices', summary['best-practices'])}
  //  ${scoreRow('SEO', summary.seo)}
  //  ${scoreRow('PWA', summary.pwa)}

  //  *Lighthouse ran against [${link}](${link})*
  //  `

  //return comment

  return 'finished'
}

module.exports = () => {
  return makeComment()
}
