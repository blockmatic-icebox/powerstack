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

// NOTE: Reading how many themes do we have
const themes_spinner = setSpinner(` %s 👀 for themes...`)
themes_spinner.setSpinnerString(spinner_string)
themes_spinner.start();

// Looking for theme Color Modes if any
(async () => {
  const { data, error } = await getThemes()

  if (error) throw new Error(error)

  // Any possible match for the Light/Dark Themes names...
  const fetched_themes: Toolabs.Maybe<Toolabs.Maybe<Toolabs.ThemeState>[]> = data.filter(theme => theme.name.toLowerCase().match(/^(color mode|theme color mode|colors|modes)$/)).map(theme => theme.variants)[0] || []
  
  selected_themes.split(',').forEach(async theme => {
    const { data, error } = await getThemeById(theme)
    const theme_name = fetched_themes?.find(t => t?.id === theme)?.name ?? 'default'
  
    if (error) throw new Error(error)
    
    processTheme({
      name: theme_name.toLowerCase(),
      theme: data as Theme,
    })
  })
})();


themes_spinner.stop();
console.log('\n\n')
const toolabs_theme_spinner = setSpinner(` %s 〰️ Processing Toolabs JSON Themes...`)
toolabs_theme_spinner.setSpinnerString(spinner_string)
toolabs_theme_spinner.start()




// Functions Starts Here //



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

    // console.log('results toolabs by getting themes =>>>', JSON.stringify(data, null, 2))

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
    
    // console.log(`results toolabs by getting ${theme_id} theme =>>>`, JSON.stringify(data, null, 2))

    if (error) throw new Error(JSON.stringify(error, null, 2))

    return { data: data as Toolabs.GetMyThemesQuery, error: '' }
  } catch (error) {
    console.log('(error as Error).message', (error as Error).message)
    return { data: {} as Toolabs.GetMyThemesQuery, error: (error as Error).message }
  }
}

function normalizeKeyName(key: string) {
  return key.toLowerCase().replace(/\s/g, '-')
}

function processTheme(theme: ToolabsTheme) {
  const icons: Toolabs.Icon[] = []
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
    console.log('t_key', t_key)
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
          new_theme.theme[t_key as ThemeKey][prop.name] = `${prop.value ?? 0}ms`
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
          new_theme.theme.shadows[normalizeKeyName(prop.name)] = `${prop?.layers.map(l => `${l?.x}px ${l?.y}px ${l?.blur}px ${l?.spread}px ${l?.color.hex}`).join(', ')}`
        })
        break
      case 'gradients':
        // @ts-ignore
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme[t_key as ThemeKey][normalizeKeyName(prop.name)] = `linear-gradient(${prop?.colors?.map(c => `${c?.color.hex} ${c?.stop}%`).join(', ')})`
        })
        break
      case 'colors':
        // @ts-ignore
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme[t_key as ThemeKey][normalizeKeyName(prop.name)] = prop.hex
        })
        break
      case 'radii':
      case 'spaces':
        // @ts-ignore
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme[t_key as ThemeKey][prop.name.toLowerCase().replace(' ', '-')] = `${prop.value ?? 0}px`
        })
        break
      case 'icons':
        const pre_icons = theme_object[t_key] as Toolabs.Icon[]
        console.log('pre_icons', pre_icons)
        pre_icons.forEach(icon => {
          const normalized_name = icon.name?.replace(' ', '-') as string
          const formatted_name = normalized_name.toLowerCase().split('-')[0] as string
          const react_name = `${formatted_name?.substring(0, 1).toUpperCase()}${formatted_name?.substring(1, formatted_name.length)}Icon`
          
          icons.push({
            id: react_name,
            name: normalized_name,
            svg: `import * as React from 'react'

const ${react_name}: React.FC = (props) => (
  ${icon.svg?.replace('xmlns=\"http://www.w3.org/2000/svg\"', '{ ...props }')}
)

export default ${react_name}`
          } as Toolabs.Icon)
        })
        break
      default:
        break
    }
  })

  Object.keys(new_theme.theme).forEach((key) => {
    // @ts-ignore
    if (Object.keys(new_theme.theme[key]).length === 0) delete new_theme.theme[key]
  })
  console.log(JSON.stringify(new_theme, null, 2))
  generateTheme(new_theme, icons)
}

function generateTheme({ name, theme }: ToolabsTheme, icons: Toolabs.Icon[]) {
  // We verify if icons added
  let index_icon_file = ''
  if (icons.length !== 0) {
    icons.forEach(icon => {
      index_icon_file += `export { default as ${icon.id} } from './${icon.id}'
      `
    })
  }

  toolabs_theme_spinner.stop()
  console.log(`
  ✔️  Toolabs JSON Themes Digested successfully 🪄🎉`)
  const writing_theme_spinner = setSpinner(` %s 〰️ Writting Toolabs JSON ${name} Theme for stitches...`)
  writing_theme_spinner.setSpinnerString(spinner_string)
  writing_theme_spinner.start()

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

  writing_theme_spinner.stop()

  // We create files if we found icons
  if (icons.length !== 0) {
    console.log('\n\n')
    const writting_icons_spinner = setSpinner('%s 〰️ Icons Found! Generating Icon React Files 🔥...')
    writting_icons_spinner.setSpinnerString(spinner_string)
    writting_icons_spinner.start()

    icons.forEach(({ id, svg }) => {
      fs.writeFile(
        `./app-view/components/icons/${id}.tsx`,
        svg as string,
        (err) => {
          if (err) {
            console.error(err)
            writting_icons_spinner.stop()
            throw new Error(
              `
              ❌ There was problem trying to creating the Icon File 💔. Check if values are valid.`,
              )
            }
    
            writting_icons_spinner.stop()
          console.log(`✔️ ${id} created successfully 🪄🎉`)
        },
        )
    })
    
    fs.writeFile(
      `./app-view/components/icons/index.ts`,
      index_icon_file,
      (err) => {
        if (err) {
          console.error(err)
          writting_icons_spinner.stop()
          throw new Error(
            `
            ❌ There was problem trying to creating the file 💔. Check if values are valid.`,
          )
        }

        writting_icons_spinner.stop()
        console.log(`✔️  Stitches file for ${name} theme created successfully 🪄🎉`)
      },
    )
    writting_icons_spinner.stop()
  }
}

export { Toolabs }
