import React from 'react'

export interface WizardStep {
  name: string
  component: React.FC<WizardStepProps>
}

export interface WizardStepProps {
  next: () => void
  prev: () => void
  close?: () => void
  goTo: (step: string) => void
}

export interface WizardProps {
  error?: string
  steps: WizardStep[]
  open: boolean
  close?: () => void
}
