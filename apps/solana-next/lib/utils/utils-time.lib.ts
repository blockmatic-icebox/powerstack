export const timeAgoFormat = (language: string, timestamp: Date | string) => {
  const formattedTimestamp = new Date(timestamp).valueOf()
  const DATE_UNITS = {
    day: 86400,
    hour: 3600,
    minute: 60,
  }
  const getSecondsDiff = (timestamp: number) => (Date.now() - timestamp) / 1000

  const getUnitAndValueDate = (secondsElapsed: number) => {
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
      if (secondsElapsed >= secondsInUnit || unit === 'second') {
        const value = Math.floor(secondsElapsed / secondsInUnit) * -1
        return { value, unit }
      }
    }

    return null
  }

  const getTimeAgo = (formattedTimestamp: any) => {
    try {
      const rtf = new Intl.RelativeTimeFormat(language === 'cn' ? 'zh' : language)
      const secondsElapsed = getSecondsDiff(formattedTimestamp)
      // @ts-ignore
      const { value, unit } = getUnitAndValueDate(secondsElapsed)

      return rtf.format(value, unit)
    } catch (error) {
      return new Intl.DateTimeFormat().format(formattedTimestamp)
    }
  }

  return getTimeAgo(formattedTimestamp)
}

export const getTotalTime = (time: Date, compare_time?: Date, full?: boolean) => {
  const compare_date = compare_time ? compare_time.getTime() : Date.now()

  let delta = Math.abs(time.getTime() - compare_date) / 1000

  const weeks = Math.floor(delta / 604800)

  delta -= weeks * 604800

  const days = Math.floor(delta / 86400)

  delta -= days * 86400

  const hours = Math.floor(delta / 3600) % 24

  delta -= hours * 3600

  const minutes = Math.floor(delta / 60) % 60

  delta -= minutes * 60

  const seconds = Math.floor(delta)

  if (Math.sign(seconds) === -1 && Math.sign(minutes) === -1) return 'no time'

  return `${weeks ? `${weeks}${full ? ' weeks' : 'w'}` : ''} ${days ? `${days}d` : ''} ${
    hours ? `${minutes <= 59 ? hours + 1 : hours}h` : ''
  }`
}

export const getNewTime = (time: string, compare_time: Date, is_time_decrease = false) => {
  const time_split = time ? time.split('|').map((t: string) => parseInt(t, 10)) : undefined
  const time_milliseconds = time_split
    ? (time_split[0] * (7 * 24) + time_split[1] * 24 + time_split[2]) * 60 * 60 * 1000
    : 0
  const new_time = time_split
    ? new Date(
        is_time_decrease ? compare_time.getTime() - time_milliseconds : compare_time.getTime() + time_milliseconds
      )
    : new Date()

  return new_time
}
