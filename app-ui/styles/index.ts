import { global_css } from './global'
import { getCssText } from './stitches.config'

export const getGeneratedStylesheet = () => global_css + getCssText()
