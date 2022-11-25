export const DefaultImage = {
  default_url:
    'https://res.cloudinary.com/do8xb2p1h/image/upload/v1668524810/GeeklistDefaultImages/profile_default_u3s2dc.png',
} as const

export const CardTypes = {
  MICRO: 'micro',
  ACHIEVEMENT: 'achievement',
} as const

type constants_join = typeof DefaultImage | typeof CardTypes

type constants = constants_join[keyof constants_join]

export default constants
