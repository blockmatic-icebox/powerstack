import { diffWordsWithSpace } from "diff"

export const getDiffText = (text1: string, text2: string) => {
  return diffWordsWithSpace(text1, text2)
}
