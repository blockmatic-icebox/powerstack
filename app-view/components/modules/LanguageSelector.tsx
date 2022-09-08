import { useRouter } from 'next/router'
import { Link } from '~/app-view/components/base/Link'
import { styled } from '~/app-view/styles/stitches.config'

const LanguageSelectorComponent = styled('section', {
  width: '100%',
  display: 'flex',
  borderBottom: '1px solid #ccc3',
  height: 'auto',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',

  a: {
    width: 100,
    height: 40,
    p: '$xx-small',
    borderBottom: '4px solid transparent',
    textAlign: 'center',
    '&:hover': {
      borderBottomColor: '#ccc8',
    },
  },
})

const langs = ['en_US', 'es', 'fr_CA', 'pt_BR']

export const LanguageSelector = () => {
  const router = useRouter()
  console.log('currentPath', router.locale)
  return (
    <LanguageSelectorComponent>
      <h3 style={{ width: '100%' }}>Select Lang</h3>
      {langs.map((l) => (
        <Link
          href={router.asPath}
          locale={l}
          style={{ borderBottomColor: l === router.locale ? '#ccc8' : undefined }}
        >
          {l}
        </Link>
      ))}
    </LanguageSelectorComponent>
  )
}
