import { WizardStep } from '~/components/wizard'

import { DataStep } from './data.step'
import { SuccessStep } from './success.step'

export const steps: WizardStep[] = [
  {
    name: 'data',
    component: DataStep,
  },
  {
    name: 'sucess',
    component: SuccessStep,
  },
]
