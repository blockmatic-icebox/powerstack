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

/**
 * @param {LighthouseOutputs} lighthouseOutputs
 */
function makeComment(lighthouseOutputs) {
  console.log('lighthouseOutputs', JSON.stringify(lighthouseOutputs))

  const summary = lighthouseOutputs.manifest[0].summary
  const link = lighthouseOutputs.manifest[0].url

  const comment = `## ⚡️🏠 Lighthouse report
 
 We ran Lighthouse against the changes and produced this summary:
 
 | Category | Score |
 | -------- | ----- |
 ${scoreRow('Performance', summary.performance)}
 ${scoreRow('Accessibility', summary.accessibility)}
 ${scoreRow('Best practices', summary['best-practices'])}
 ${scoreRow('SEO', summary.seo)}
 ${scoreRow('PWA', summary.pwa)}
 
 *Lighthouse ran against [${link}](${link})*
 `

  return comment
}

module.exports = ({ lighthouseOutputs }) => {
  return makeComment(lighthouseOutputs)
}
