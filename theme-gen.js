const fs = require('fs')
const [file_name] = process.argv.slice(2)
const theme = require(`./${file_name ?? 'default'}-theme.json`)

const new_theme = {
  name: theme.name,
  typeStyles: {},
  radii: {},
  shadows: {},
}

console.log(`〰️ Processing Toolabs JSON Theme...`)

Object.keys(theme).forEach((t_key) => {
  new_theme[t_key] = {}

  switch (t_key) {
    case 'name':
      new_theme[t_key] = theme[t_key]
      break
    case 'typeStyles':
      let typeStyleLabel = ''

      theme[t_key].forEach((typeStyle) => {
        Object.keys(typeStyle).forEach((style) => {
          if (style === 'name') {
            typeStyleLabel = typeStyle[style]
          } else {
            new_theme.typeStyles[typeStyleLabel] = {
              ...new_theme.typeStyles[typeStyleLabel],
              [style]: typeStyle[style],
            }
          }
        })
      })
      break
    case 'BorderRadiuses': {
      theme[t_key].forEach((prop) => {
        new_theme.radii[prop.name] = prop.value
      })
      break
    }
    case 'easeCurves': {
      theme[t_key].forEach((prop) => {
        new_theme[t_key][prop.name] = prop.curve
      })
      break
    }
    case 'durations':
      theme[t_key].forEach((prop) => {
        new_theme[t_key][prop.name] = prop.duration
      })
      break
    case 'fonts':
      theme[t_key].forEach((prop) => {
        new_theme[t_key][prop.name] = prop.fontFamily
      })
      break
    case 'Shadows':
      theme[t_key].forEach((prop) => {
        new_theme.shadows[prop.name] = prop.value
      })
      break
    case 'colors':
    case 'fonts':
    case 'space':
      theme[t_key].forEach((prop) => {
        new_theme[t_key][prop.name] = prop.value
      })
      break
    default:
      break
  }
})

console.log(`〰️ Processing Toolabs JSON Theme...`)

Object.keys(new_theme).forEach((key) => {
  if (Object.keys(new_theme[key]).length === 0 && key !== 'name')
    delete new_theme[key]
})

console.log(`✔️  Toolabs JSON Theme Digested successfully`)
console.log(`〰️ Writting Toolabs JSON Theme for stitches...`)

fs.writeFile(
  `./app/styles/${file_name}-theme.json`,
  JSON.stringify(new_theme),
  (err) => {
    if (err) {
      console.error(err)
      throw new Error(
        '❌ There was problem trying to creting the file 💔. Check if values are valid.',
      )
    }

    console.log(
      `✔️  Stitches file for ${file_name} theme created successfully 🎉`,
    )
  },
)
