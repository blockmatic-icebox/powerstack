import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export function CircularProgressMini(props: { step: string; percentage: string }) {
  const { step, percentage } = props

  return (
    <CircularProgressbarWithChildren
      value={parseInt(percentage)}
      text={`${step}`}
      styles={buildStyles({
        rotation: 0.25,
        textSize: '0px',
        textColor: 'transparent',
        pathTransitionDuration: 0.5,
        pathColor: `#01B574`,
        trailColor: '#E9EDF7',
        backgroundColor: '#3e98c7',
      })}
    >
      <p className="text-sm font-medium text-navy-700 dark:text-white">{step}</p>
    </CircularProgressbarWithChildren>
  )
}
