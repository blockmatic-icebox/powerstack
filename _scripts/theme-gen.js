const fs = require('fs')
const path = require('path')
const Spinner = require('cli-spinner').Spinner
//  NOTE: No longer necessary a 3rd param on script... all automated
// const [file_name] = process.argv.slice(2)
const file_names = []
const spinner_string = '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'

const themes = {}

// NOTE: Mck data simulating an array of themes to read (array TBD)
// NOTE: Where we fetch our data for our themes
const dir = path.join(__dirname, '..', 'mock')

// NOTE: Reading how many themes do we have
const themes_spinner = setSpinner(` %s 👀 for themes...
 .
`)
themes_spinner.setSpinnerString(spinner_string).setSpinnerDelay(80)
themes_spinner.start()

fs.readdirSync(dir).forEach((json) => {
  const theme_key = json.replace(/(-theme\.json|\.json)/, '').replace(/theme/, 'default')
  file_names.push(theme_key)
  app_logger.log(`🖌️  ${theme_key} theme found!`)

  themes[theme_key] = require(path.join(dir, json))
})

themes_spinner.stop()
const toolabs_theme_spinner = setSpinner(`
 %s 〰️ Processing Toolabs JSON Themes...`)
toolabs_theme_spinner.setSpinnerString(spinner_string).setSpinnerDelay(80)
toolabs_theme_spinner.start()

const new_themes = []

Object.keys(themes).forEach((theme) => {
  const new_theme = {
    name: themes[theme].name,
    theme: {
      typeStyles: {},
      radii: {},
      shadows: {},
    },
  }
  const theme_object = themes[theme]

  Object.keys(theme_object).forEach((t_key) => {
    new_theme.theme[t_key] = {}

    switch (t_key) {
      case 'name':
        new_theme[t_key] = theme_object[t_key]
        break
      case 'typeStyles':
        let typeStyleLabel = ''

        theme_object[t_key].forEach((typeStyle) => {
          Object.keys(typeStyle).forEach((style) => {
            if (style === 'name') {
              typeStyleLabel = typeStyle[style]
            } else {
              new_theme.theme.typeStyles[typeStyleLabel] = {
                ...new_theme.theme.typeStyles[typeStyleLabel],
                [style]: typeStyle[style],
              }
            }
          })
        })
        break
      case 'BorderRadiuses': {
        theme_object[t_key].forEach((prop) => {
          new_theme.theme.radii[prop.name] = prop.value
        })
        break
      }
      case 'easeCurves': {
        theme_object[t_key].forEach((prop) => {
          new_theme.theme[t_key][prop.name] = prop.curve
        })
        break
      }
      case 'durations':
        theme_object[t_key].forEach((prop) => {
          new_theme.theme[t_key][prop.name] = prop.duration
        })
        break
      case 'fonts':
        theme_object[t_key].forEach((prop) => {
          new_theme.theme[t_key][prop.name] = prop.fontFamily
        })
        break
      case 'Shadows':
        theme_object[t_key].forEach((prop) => {
          new_theme.theme.shadows[prop.name] = prop.value
        })
        break
      case 'colors':
      case 'fonts':
      case 'space':
        theme_object[t_key].forEach((prop) => {
          new_theme.theme[t_key][prop.name] = prop.value
        })
        break
      default:
        break
    }
  })

  Object.keys(new_theme.theme).forEach((key) => {
    if (Object.keys(new_theme.theme[key]).length === 0) delete new_theme.theme[key]
  })

  new_themes.push(new_theme)
})

toolabs_theme_spinner.stop()
app_logger.log(`
✔️  Toolabs JSON Themes Digested successfully 🪄🎉`)
const writing_theme_spinner = setSpinner(` %s 〰️ Writting Toolabs JSON Theme for stitches...

`)
writing_theme_spinner.setSpinnerString(spinner_string).setSpinnerDelay(80)
writing_theme_spinner.start()

file_names.forEach((file) => {
  fs.writeFile(
    `./app/styles/themes/${file !== 'default' ? `${file}-` : ''}theme.ts`,
    `export const ${file !== 'default' ? `${file}_` : ''}theme = ${JSON.stringify(
      new_themes.find((t) => t.name === file),
      null,
      2,
    )}`,
    (err) => {
      if (err) {
        console.error(err)
        writing_theme_spinner.stop()
        throw new Error(
          `
          ❌ There was problem trying to creting the file 💔. Check if values are valid.`,
        )
      }

      writing_theme_spinner.stop()
      app_logger.log(`✔️  Stitches file for ${file} theme created successfully 🪄🎉`)
    },
  )

  // TODO: fs.writeFile(`./app/types/${file_name ? `${file_name}_` : ''}-theme.ts`)...
})

function setSpinner(message) {
  return new Spinner(message)
}
