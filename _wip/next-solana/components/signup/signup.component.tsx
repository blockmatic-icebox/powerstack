import { useGlobalContext } from '~/context/global'

import { Wizard } from '../wizard'
import { steps } from './steps'

export function SignUp() {
  const { showSignUp, setGlobalState } = useGlobalContext()

  return (
    <Wizard steps={steps} open={showSignUp} close={() => setGlobalState({ showSignUp: false })} />
  )
}
