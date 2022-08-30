import * as Toolabs from './graphql/generated-sdk'
// TODO: Do Types...
import { HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch'
import fs from 'fs'
import path from 'path'

import { Spinner } from 'cli-spinner'

type TypeStyles = Toolabs.Maybe<{
  fontFamily: string
  fontSize: string
  lineHeight: string
  letterSpacing: string
}>
type Theme = Toolabs.Maybe<Toolabs.GetMyThemesQuery> & {
  typeStyles: TypeStyles
}
type ThemeKey = keyof Theme

interface ToolabsTheme {
  name: string
  theme: Theme
}

const spinner_string = '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'
const selected_themes = process.env.THEME_GEN_THEMES ?? 'Default'

const themes: ToolabsTheme[] = []

// NOTE: Reading how many themes do we have
const themes_spinner = setSpinner(` %s 👀 for themes...
 .
 `)
themes_spinner.setSpinnerString(spinner_string)
themes_spinner.start()

// Looking for theme Color Modes if any
let fetched_themes: Toolabs.Maybe<Toolabs.Maybe<Toolabs.ThemeState>[]> = [];
  
(async () => {
  const { data, error } = await getThemes()

  if (error) throw new Error(error)

  // Any possible match for the Light/Dark Themes names...
  fetched_themes = data.filter(theme => theme.name.toLowerCase().match(/^(color mode|theme color mode|colors|modes)$/)).map(theme => theme.variants)[0] || []
})();
(() => {
  selected_themes.split(',').forEach(async theme => {
    const { data, error } = await getThemeById(theme)
    const theme_name = fetched_themes?.find(t => t?.id === theme)?.name ?? 'Default'
    
    if (error) throw new Error(error)
    
    themes.push({
      name: theme_name,
      theme: data as Theme,
    })
  })
})()

themes_spinner.stop();
console.log('\n\n')
const toolabs_theme_spinner = setSpinner(`%s 〰️ Processing Toolabs JSON Themes...`)
toolabs_theme_spinner.setSpinnerString(spinner_string)
toolabs_theme_spinner.start()

const new_themes: ToolabsTheme[] = []
const icons: Toolabs.Icon[] = []

themes.forEach((theme) => {
  const new_theme: ToolabsTheme = {
    name: theme.name,
    theme: {
      typeStyles: {} as TypeStyles,
    },
  }
  const theme_object: Theme = theme.theme

  Object.keys(theme_object).forEach((t_key) => {
    // @ts-ignore
    new_theme.theme[t_key as keyof ThemeKey] = {} as any

    switch (t_key) {
      case 'typeStyles':
        let typeStyleLabel = ''

        // @ts-ignore
        theme_object[t_key as ThemeKey]!.forEach((typeStyle: any) => {
          Object.keys(typeStyle).forEach((style) => {
            if (style === 'name') {
              typeStyleLabel = typeStyle[style]
            } else {
              // @ts-ignore
              new_theme.theme.typeStyles[typeStyleLabel] = {
                // @ts-ignore
                ...new_theme.theme.typeStyles[typeStyleLabel],
                [style]: typeStyle[style],
              }
            }
          })
        })
        break
      case 'easeCurves': {
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme[t_key as ThemeKey][prop.name] = prop.curve
        })
        break
      }
      case 'durations':
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme[t_key as ThemeKey][prop.name] = prop.duration
        })
        break
      case 'fonts':
        // @ts-ignore
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme[t_key as ThemeKey][prop.name] = prop.fontFamily
        })
        break
      case 'shadows':
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme.shadows[prop.name] = prop.value
        })
        break
      case 'radii':
      case 'colors':
      case 'space':
        // @ts-ignore
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme[t_key as ThemeKey][prop.name] = prop.value
        })
        break
      case 'icons':
        icons = theme_object[t_key] as Toolabs.Icon[]
        break
      default:
        break
    }
  })

  Object.keys(new_theme.theme).forEach((key) => {
    // @ts-ignore
    if (Object.keys(new_theme.theme[key]).length === 0) delete new_theme.theme[key]
  })

  new_themes.push(new_theme)
})

toolabs_theme_spinner.stop()
console.log(`
✔️  Toolabs JSON Themes Digested successfully 🪄🎉`)
const writing_theme_spinner = setSpinner(` %s 〰️ Writting Toolabs JSON Theme for stitches...`)
writing_theme_spinner.setSpinnerString(spinner_string)
writing_theme_spinner.start()

new_themes.forEach(({ name, theme }) => {
  fs.writeFile(
    `./app-view/styles/themes/${name !== 'default' ? `${name}-` : ''}theme.ts`,
    `export const ${name !== 'default' ? `${name}_` : ''}theme = ${JSON.stringify(
      { name, theme },
      null,
      2,
    )}`,
    (err) => {
      if (err) {
        console.error(err)
        writing_theme_spinner.stop()
        throw new Error(
          `
          ❌ There was problem trying to creating the file 💔. Check if values are valid.`,
          )
        }

        writing_theme_spinner.stop()
      console.log(`✔️  Stitches file for ${name} theme created successfully 🪄🎉`)
    },
    )
})

writing_theme_spinner.stop()

// TODO: From here it is not crashing...

function setSpinner(message: any) {
  return new Spinner(message)
}

function toolabsClient() {
  const http_link = new HttpLink({
    uri: 'https://xdapi.toolabs.com/graphql',
    headers: {
      "x-toolabs-token" : process.env.THEME_GEN_KEY
    },
    fetch
  })

  return new ApolloClient({
    link: http_link,
    cache: new InMemoryCache({ addTypename: false }),
  })
}

async function getThemes(): Promise<{ data: Toolabs.Theme[]; error: string;  }> {
  try {
    const { data, error } = await toolabsClient().query<
      Toolabs.ThemeGenThemesQuery,
      Toolabs.ThemeGenThemesQueryVariables
    >({
      query: Toolabs.ThemeGenThemesDocument,
    })

    console.log('results toolabs by getting themes =>>>', JSON.stringify(data, null, 2))

    if (error) throw new Error(JSON.stringify(error, null, 2))

    return { data: data.themes as Toolabs.Theme[], error: '' }
  } catch (error) {
    console.log('(error as Error).message', (error as Error).message)
    return { data: [] as Toolabs.Theme[], error: (error as Error).message }
  }
}

async function getThemeById(theme_id: string): Promise<{ data: Toolabs.GetMyThemesQuery; error: string; }> {
  try {
    const { data, error } = await toolabsClient().query<
      Toolabs.GetMyThemesQuery,
      Toolabs.GetMyThemesQueryVariables
    >({
      query: Toolabs.GetMyThemesDocument,
      variables: {
        themes: theme_id
      }
    })
    
    console.log(`results toolabs by getting ${theme_id} theme =>>>`, JSON.stringify(data, null, 2))

    if (error) throw new Error(JSON.stringify(error, null, 2))

    return { data: data as Toolabs.GetMyThemesQuery, error: '' }
  } catch (error) {
    console.log('(error as Error).message', (error as Error).message)
    return { data: {} as Toolabs.GetMyThemesQuery, error: (error as Error).message }
  }
}

export { Toolabs }
