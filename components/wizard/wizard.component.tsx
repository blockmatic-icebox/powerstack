import React, { useState } from 'react'

import { Modal } from '~/components/modal'
import { noop } from '~/lib/utils'

import { WizardProps } from './wizard.type'

export function Wizard({ error, steps, open, close }: WizardProps) {
  const [step, setStep] = useState<string>(steps[0].name)

  const getCurrentStepIndex = () => {
    const currentStep = steps.find((s) => s.name === step)
    return steps.indexOf(currentStep!)
  }

  const prev = () => {
    const prevStepIndex = getCurrentStepIndex() - 1
    if (prevStepIndex >= 0) setStep(steps[prevStepIndex].name)
  }

  const next = () => {
    const nextStepIndex = getCurrentStepIndex() + 1
    if (nextStepIndex < steps.length) setStep(steps[nextStepIndex].name)
  }

  const goTo = (step: string) => setStep(step)

  return (
    <Modal show={open} width={640} close={noop}>
      {error && <div>{error}</div>}
      {!error &&
        steps?.map((s) =>
          step === s.name ? (
            <s.component key={s.name} prev={prev} next={next} goTo={goTo} close={close} />
          ) : null,
        )}
    </Modal>
  )
}
