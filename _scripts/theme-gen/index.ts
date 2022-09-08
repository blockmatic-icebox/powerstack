import * as Toolabs from './graphql/generated-sdk'
// TODO: Do Types...
import { HttpLink, ApolloClient, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'
import fs from 'fs'

import { Spinner } from 'cli-spinner'

type Theme = Toolabs.GetMyThemesQuery & {
  textStyles?: Toolabs.TextStyle[]
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
themes_spinner.start()

// Looking for theme Color Modes if any
;(async () => {
  const { data, error } = await getThemes()

  if (error) throw new Error(error)

  // Any possible match for the Light/Dark Themes names...
  const fetched_themes: Toolabs.Maybe<Toolabs.Maybe<Toolabs.ThemeState>[]> =
    data
      .filter((theme) =>
        theme.name.toLowerCase().match(/^(color mode|theme color mode|colors|modes)$/),
      )
      .map((theme) => theme.variants)[0] || []

  selected_themes.split(',').forEach(async (theme) => {
    const { data, error } = await getThemeById(`Default,${theme}`)
    const theme_name = fetched_themes?.find((t) => t?.id === theme)?.name ?? 'default'

    if (error) throw new Error(error)

    console.log(`\n ✔️  ${theme_name} Theme Found! Preparing it for for digestion ... `)

    processTheme({
      name: theme_name.toLowerCase(),
      theme: data as Theme,
    })
  })
})()

themes_spinner.stop()
console.log('\n') // new-line

const toolabs_theme_spinner = setSpinner(` %s 〰️ Processing Toolabs JSON Themes ...`)
toolabs_theme_spinner.setSpinnerString(spinner_string)
toolabs_theme_spinner.start()

// Functions Starts Here //
// TODO: Make library dir...

function setSpinner(message: any) {
  return new Spinner(message)
}

function toolabsClient() {
  const http_link = new HttpLink({
    uri: 'https://xdapi.toolabs.com/graphql',
    headers: {
      'x-toolabs-token': process.env.THEME_GEN_KEY,
    },
    fetch,
  })

  return new ApolloClient({
    link: http_link,
    cache: new InMemoryCache({ addTypename: false }),
  })
}

async function getThemes(): Promise<{ data: Toolabs.Theme[]; error: string }> {
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

async function getThemeById(
  theme_id: string,
): Promise<{ data: Toolabs.GetMyThemesQuery; error: string }> {
  try {
    const { data, error } = await toolabsClient().query<
      Toolabs.GetMyThemesQuery,
      Toolabs.GetMyThemesQueryVariables
    >({
      query: Toolabs.GetMyThemesDocument,
      variables: {
        themes: theme_id,
      },
    })

    // console.log(`results toolabs by getting ${theme_id} theme =>>>`, JSON.stringify(data, null, 2))

    if (error) throw new Error(JSON.stringify(error, null, 2))

    return { data: data as Toolabs.GetMyThemesQuery, error: '' }
  } catch (error) {
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
      // @ts-ignore
      space: {},
    },
  }
  const theme_object: Theme = theme.theme

  Object.keys(theme_object).forEach((t_key) => {
    // @ts-ignore
    new_theme.theme[t_key as keyof ThemeKey] = {} as Theme

    switch (t_key) {
      case 'textstyles':
        let typeStyleLabel = ''

        // @ts-ignore
        theme_object[t_key as ThemeKey]!.forEach((typeStyle: Toolabs.TextStyle) => {
          Object.keys(typeStyle).forEach((style) => {
            if (style === 'name') {
              typeStyleLabel = normalizeKeyName(typeStyle.name as string)
            } else {
              // @ts-ignore
              new_theme.theme.textstyles[typeStyleLabel] = {
                // @ts-ignore
                ...new_theme.theme.textstyles[typeStyleLabel],
                [style as keyof Toolabs.TextStyle]: typeStyle[style as keyof Toolabs.TextStyle],
              }
            }
          })
        })
        break
      case 'easeCurves': {
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme[t_key as ThemeKey][
            prop.name
          ] = `cubic-bezier(${prop?.value?.x1}, ${prop?.value?.y1}, ${prop?.value?.x2}, ${prop?.value?.y2})`
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
          new_theme.theme.shadows[normalizeKeyName(prop.name)] = `${prop?.layers
            .map((l) => `${l?.x}px ${l?.y}px ${l?.blur}px ${l?.spread}px ${l?.color.hex}`)
            .join(', ')}`
        })
        break
      case 'gradients':
        // @ts-ignore
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme['colors' as ThemeKey][
            `${normalizeKeyName(prop.name)}-gradient`
          ] = `linear-gradient(${prop?.colors
            ?.map((c) => `${c?.color.hex} ${c?.stop}%`)
            .join(', ')})`
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
        // @ts-ignore
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme[t_key as ThemeKey][prop.name.toLowerCase().replace(' ', '-')] = `${
            prop.value ?? 0
          }px`
        })
        break
      case 'spaces':
        // @ts-ignore
        theme_object[t_key]!.forEach((prop) => {
          // @ts-ignore
          new_theme.theme['space'][prop.name.toLowerCase().replace(' ', '-')] = `${
            prop.value ?? 0
          }px`
        })
        break
      case 'icons':
        const pre_icons = theme_object[t_key] as Toolabs.Icon[]

        pre_icons.forEach((icon) => {
          const normalized_name = icon.name?.replace(' ', '-') as string
          const formatted_name = normalized_name.toLowerCase().split('-')[0] as string
          const react_name = `${formatted_name
            ?.substring(0, 1)
            .toUpperCase()}${formatted_name?.substring(1, formatted_name.length)}Icon`

          icons.push({
            id: react_name,
            name: normalized_name,
            svg: `import * as React from 'react'

const ${react_name}: React.FC = (props) => (
  ${icon.svg?.replace('xmlns="http://www.w3.org/2000/svg"', '{ ...props }')}
)

export default ${react_name}
`,
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

  toolabs_theme_spinner.stop()
  console.log(` ✔️  Toolabs ${theme.name} Theme Digested successfully. Preparing for Writing 📝`)

  generateTheme(new_theme, icons)
}

function generateTheme({ name, theme }: ToolabsTheme, icons: Toolabs.Icon[]) {
  // We verify if icons added
  let index_icon_file = ''
  if (icons.length !== 0) {
    icons.forEach((icon) => {
      index_icon_file += `export { default as ${icon.id} } from './${icon.id}'
`
    })
  }

  const writing_theme_spinner = setSpinner(
    ` %s 〰️ Writing Toolabs ${name.toUpperCase()} Theme for Stitches 📝🪡 `,
  )
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
        console.log('\n') // new-line
        throw new Error(
          ` ❌ There was problem trying to creating the file 💔. Check if values are valid.`,
        )
      }

      writing_theme_spinner.stop()
      console.log(` ✔️  Stitches file for ${name.toUpperCase()} theme created successfully 🪡🪄🎉`)
      console.log('\n') // new-line
    },
  )

  const icons_spinner = setSpinner(` %s 👀 for Icons...`)
  icons_spinner.setSpinnerString(spinner_string)
  icons_spinner.start()

  // We create files if we found icons
  if (icons.length !== 0) {
    console.log('\n') // new-line
    icons_spinner.stop()
    const writing_icons_spinner = setSpinner(
      ` %s 〰️ Icons Found! Generating Icon React Files for ${name.toUpperCase()} theme 🔥`,
    )
    writing_icons_spinner.setSpinnerString(spinner_string)
    writing_icons_spinner.start()

    icons.forEach(({ id, svg }) => {
      fs.writeFile(`./app-view/components/icons/${id}.tsx`, svg as string, (err) => {
        if (err) {
          console.error(err)
          writing_icons_spinner.stop()
          console.log('\n') // new-line
          throw new Error(
            ` ❌ There was problem trying to creating the Icon File 💔. Check if values are valid.`,
          )
        }

        writing_icons_spinner.stop()
        console.log(` 🎨 ${id} created successfully for ${name.toUpperCase()} theme 📦`)
      })
    })

    fs.writeFile(`./app-view/components/icons/index.ts`, index_icon_file, (err) => {
      if (err) {
        console.error(err)
        writing_icons_spinner.stop()
        console.log('\n') // new-line
        throw new Error(
          ` ❌ There was problem trying to creating the file 💔. Check if values are valid.`,
        )
      }

      writing_icons_spinner.stop()
      console.log(` ✔️  Icons for ${name.toUpperCase()} theme created successfully 🪄🎉`)
    })
  } else {
    icons_spinner.stop()
    console.log(` ⚠️ No Icons Found for ${name.toUpperCase()} theme.`)
  }

  console.log('\n') // new-line
}

export { Toolabs }
