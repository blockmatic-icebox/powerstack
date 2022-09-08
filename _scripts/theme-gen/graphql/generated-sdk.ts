import { DocumentNode } from 'graphql'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Upload: any
}

export type BezierCurve = {
  x1?: Maybe<Scalars['Float']>
  x2?: Maybe<Scalars['Float']>
  y1?: Maybe<Scalars['Float']>
  y2?: Maybe<Scalars['Float']>
}

export type Bool = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['Boolean']>
}

export type Border = {
  color?: Maybe<Color>
  id: Scalars['ID']
  isAliase?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  style?: Maybe<Scalars['String']>
  tokenId?: Maybe<Scalars['String']>
  tokenName?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Color = {
  alpha?: Maybe<Scalars['Float']>
  blue?: Maybe<Scalars['Int']>
  green?: Maybe<Scalars['Int']>
  hex?: Maybe<Scalars['String']>
  hsla?: Maybe<Scalars['String']>
  id: Scalars['ID']
  isAliase?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  red?: Maybe<Scalars['Int']>
  rgb?: Maybe<Scalars['String']>
  rgba?: Maybe<Scalars['String']>
  tokenId?: Maybe<Scalars['String']>
  tokenName?: Maybe<Scalars['String']>
}

export type CustomToken = {
  fields?: Maybe<Array<Maybe<CustomTokenField>>>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
}

export type CustomTokenField = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type CustomTokenFieldType = {
  dataType?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
}

export type CustomTokenType = {
  fields?: Maybe<Array<Maybe<CustomTokenFieldType>>>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
}

export type Duration = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type EaseCurve = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  value?: Maybe<BezierCurve>
}

export type Filter = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type Gradient = {
  colors?: Maybe<Array<Maybe<GradientColor>>>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
}

export type GradientColor = {
  color?: Maybe<Color>
  stop?: Maybe<Scalars['Float']>
}

export type Icon = {
  css?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  svg?: Maybe<Scalars['String']>
}

export type Query = {
  boolean?: Maybe<Bool>
  booleans?: Maybe<Array<Maybe<Bool>>>
  border?: Maybe<Border>
  borders?: Maybe<Array<Maybe<Border>>>
  color?: Maybe<Color>
  colors?: Maybe<Array<Maybe<Color>>>
  customDefinedToken?: Maybe<CustomToken>
  customDefinedTokenType?: Maybe<CustomTokenType>
  customDefinedTokenTypes?: Maybe<Array<Maybe<CustomTokenType>>>
  customDefinedTokens?: Maybe<Array<Maybe<CustomToken>>>
  duration?: Maybe<Duration>
  durations?: Maybe<Array<Maybe<Duration>>>
  easeCurve?: Maybe<EaseCurve>
  easeCurves?: Maybe<Array<Maybe<EaseCurve>>>
  filter?: Maybe<Filter>
  filters?: Maybe<Array<Maybe<Filter>>>
  gradient?: Maybe<Gradient>
  gradients?: Maybe<Array<Maybe<Gradient>>>
  icon?: Maybe<Icon>
  icons?: Maybe<Array<Maybe<Icon>>>
  radii?: Maybe<Array<Maybe<Radius>>>
  radius?: Maybe<Radius>
  shadow?: Maybe<Shadow>
  shadows?: Maybe<Array<Maybe<Shadow>>>
  space?: Maybe<Space>
  spaces?: Maybe<Array<Maybe<Space>>>
  text?: Maybe<TextContent>
  texts?: Maybe<Array<Maybe<TextContent>>>
  textstyle?: Maybe<TextStyle>
  textstyles?: Maybe<Array<Maybe<TextStyle>>>
  themes?: Maybe<Array<Maybe<Theme>>>
  tokenExports?: Maybe<TokenExport>
  transform?: Maybe<Transform>
  transforms?: Maybe<Array<Maybe<Transform>>>
  typeface?: Maybe<Typeface>
  typefaces?: Maybe<Array<Maybe<Typeface>>>
}

export type QueryBooleanArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryBooleansArgs = {
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryBorderArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryBordersArgs = {
  includeAliases?: InputMaybe<Scalars['Boolean']>
  onlyAliases?: InputMaybe<Scalars['Boolean']>
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryColorArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryColorsArgs = {
  includeAliases?: InputMaybe<Scalars['Boolean']>
  onlyAliases?: InputMaybe<Scalars['Boolean']>
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryCustomDefinedTokenArgs = {
  id: Scalars['ID']
  tokenTypeId: Scalars['ID']
}

export type QueryCustomDefinedTokenTypeArgs = {
  id: Scalars['ID']
}

export type QueryCustomDefinedTokensArgs = {
  tokenTypeId: Scalars['ID']
}

export type QueryDurationArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryDurationsArgs = {
  includeAliases?: InputMaybe<Scalars['Boolean']>
  onlyAliases?: InputMaybe<Scalars['Boolean']>
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryEaseCurveArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryEaseCurvesArgs = {
  includeAliases?: InputMaybe<Scalars['Boolean']>
  onlyAliases?: InputMaybe<Scalars['Boolean']>
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryFilterArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryFiltersArgs = {
  includeAliases?: InputMaybe<Scalars['Boolean']>
  onlyAliases?: InputMaybe<Scalars['Boolean']>
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryGradientArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryGradientsArgs = {
  includeAliases?: InputMaybe<Scalars['Boolean']>
  onlyAliases?: InputMaybe<Scalars['Boolean']>
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryIconArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryIconsArgs = {
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryRadiiArgs = {
  includeAliases?: InputMaybe<Scalars['Boolean']>
  onlyAliases?: InputMaybe<Scalars['Boolean']>
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryRadiusArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryShadowArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryShadowsArgs = {
  includeAliases?: InputMaybe<Scalars['Boolean']>
  onlyAliases?: InputMaybe<Scalars['Boolean']>
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QuerySpaceArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QuerySpacesArgs = {
  includeAliases?: InputMaybe<Scalars['Boolean']>
  onlyAliases?: InputMaybe<Scalars['Boolean']>
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryTextArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryTextsArgs = {
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryTextstyleArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryTextstylesArgs = {
  includeAliases?: InputMaybe<Scalars['Boolean']>
  onlyAliases?: InputMaybe<Scalars['Boolean']>
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryTokenExportsArgs = {
  exportId: Scalars['String']
}

export type QueryTransformArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryTransformsArgs = {
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryTypefaceArgs = {
  id: Scalars['ID']
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type QueryTypefacesArgs = {
  theme?: InputMaybe<Array<InputMaybe<ThemeQuery>>>
  themeId?: InputMaybe<Scalars['String']>
}

export type Radius = {
  id: Scalars['ID']
  isAliase?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  tokenId?: Maybe<Scalars['String']>
  tokenName?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type Shadow = {
  id: Scalars['ID']
  isAliase?: Maybe<Scalars['Boolean']>
  layers?: Maybe<Array<Maybe<ShadowLayer>>>
  name?: Maybe<Scalars['String']>
  tokenId?: Maybe<Scalars['String']>
  tokenName?: Maybe<Scalars['String']>
}

export type ShadowColor = {
  rgba?: Maybe<Scalars['String']>
}

export type ShadowLayer = {
  blur?: Maybe<Scalars['Int']>
  color?: Maybe<Color>
  spread?: Maybe<Scalars['Int']>
  x?: Maybe<Scalars['Int']>
  y?: Maybe<Scalars['Int']>
}

export type Space = {
  id: Scalars['ID']
  isAliase?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  tokenId?: Maybe<Scalars['String']>
  tokenName?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type TextContent = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type TextStyle = {
  fontFamily?: Maybe<Typeface>
  fontFamilyName?: Maybe<Scalars['String']>
  fontSize?: Maybe<Scalars['String']>
  fontWeight?: Maybe<Scalars['String']>
  id: Scalars['ID']
  letterSpacing?: Maybe<Scalars['String']>
  lineHeight?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  wordSpacing?: Maybe<Scalars['String']>
}

export type Theme = {
  id: Scalars['ID']
  name: Scalars['String']
  variants?: Maybe<Array<Maybe<ThemeState>>>
}

export type ThemeQuery = {
  state: Scalars['String']
  variation?: InputMaybe<Scalars['String']>
}

export type ThemeState = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
}

export type TokenExport = {
  description?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  tokens?: Maybe<Scalars['String']>
}

export type Transform = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  origin?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type Transition = {
  duration?: Maybe<Duration>
  ease?: Maybe<EaseCurve>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  transform?: Maybe<Transform>
}

export type Typeface = {
  fontStack?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type ThemeGenThemesQueryVariables = Exact<{ [key: string]: never }>

export type ThemeGenThemesQuery = {
  themes?: Array<{
    name: string
    variants?: Array<{ name?: string | null; id: string } | null> | null
  } | null> | null
}

export type GetMyThemesQueryVariables = Exact<{
  themes?: InputMaybe<Scalars['String']>
}>

export type GetMyThemesQuery = {
  colors?: Array<{ hex?: string | null; name?: string | null } | null> | null
  gradients?: Array<{
    name?: string | null
    colors?: Array<{ stop?: number | null; color?: { hex?: string | null } | null } | null> | null
  } | null> | null
  shadows?: Array<{
    name?: string | null
    layers?: Array<{
      x?: number | null
      y?: number | null
      blur?: number | null
      spread?: number | null
      color?: Color
    } | null> | null
  } | null> | null
  borders?: Array<{
    name?: string | null
    style?: string | null
    width?: number | null
    color?: { hex?: string | null } | null
  } | null> | null
  radii?: Array<{ name?: string | null; value?: string | null } | null> | null
  spaces?: Array<{ name?: string | null; value?: string | null } | null> | null
  durations?: Array<{ name?: string | null; value?: string | null } | null> | null
  easeCurves?: Array<{
    name?: string | null
    value?: {
      x1?: number | null
      y1?: number | null
      x2?: number | null
      y2?: number | null
    } | null
  } | null> | null
  typefaces?: Array<{ name?: string | null; value?: string | null } | null> | null
  textstyles?: Array<{
    name?: string | null
    fontFamilyName?: string | null
    lineHeight?: string | null
    letterSpacing?: string | null
    fontSize?: string | null
  } | null> | null
  transforms?: Array<{
    name?: string | null
    value?: string | null
    origin?: string | null
  } | null> | null
  texts?: Array<{ name?: string | null; value?: string | null } | null> | null
  icons?: Array<{ name?: string | null; svg?: string | null; css?: string | null } | null> | null
}

export const ThemeGenThemesDocument = gql`
  query ThemeGenThemes {
    themes {
      name
      variants {
        name
        id
      }
    }
  }
`
export const GetMyThemesDocument = gql`
  query GetMyThemes($themes: String = "Default") {
    colors(themeId: $themes) {
      hex
      name
    }
    gradients(themeId: $themes) {
      name
      colors {
        stop
        color {
          hex
        }
      }
    }
    shadows(themeId: $themes) {
      name
      layers {
        x
        y
        blur
        spread
        color {
          hex
        }
      }
    }
    borders(themeId: $themes) {
      name
      style
      width
      color {
        hex
      }
    }
    radii(themeId: $themes) {
      name
      value
    }
    spaces(themeId: $themes) {
      name
      value
    }
    durations(themeId: $themes) {
      name
      value
    }
    easeCurves(themeId: $themes) {
      name
      value {
        x1
        y1
        x2
        y2
      }
    }
    typefaces(themeId: $themes) {
      name
      value
    }
    textstyles(themeId: $themes) {
      name
      fontFamilyName
      fontSize
      lineHeight
      letterSpacing
    }
    transforms(themeId: $themes) {
      name
      value
      origin
    }
    texts(themeId: $themes) {
      name
      value
    }
    icons(themeId: $themes) {
      name
      svg
      css
    }
  }
`
export type Requester<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C,
) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    ThemeGenThemes(
      variables?: ThemeGenThemesQueryVariables,
      options?: C,
    ): Promise<ThemeGenThemesQuery> {
      return requester<ThemeGenThemesQuery, ThemeGenThemesQueryVariables>(
        ThemeGenThemesDocument,
        variables,
        options,
      ) as Promise<ThemeGenThemesQuery>
    },
    GetMyThemes(variables?: GetMyThemesQueryVariables, options?: C): Promise<GetMyThemesQuery> {
      return requester<GetMyThemesQuery, GetMyThemesQueryVariables>(
        GetMyThemesDocument,
        variables,
        options,
      ) as Promise<GetMyThemesQuery>
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
