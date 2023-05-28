import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export function CircularProgress(props: { title: string; percentage: string }) {
  const { title, percentage } = props

  return (
    <CircularProgressbarWithChildren
      value={parseInt(percentage)}
      styles={buildStyles({
        rotation: 0.25,
        strokeLinecap: 'round',
        textSize: '16px',
        pathTransitionDuration: 0.5,
        pathColor: '#4318FF',
        textColor: '#1B2559',
        trailColor: '#E9EDF7',
        backgroundColor: '#4318FF',
      })}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center text-sm font-medium text-gray-600">
          {title}
        </div>
        <div className="text-xl font-bold text-navy-700 dark:text-white">{percentage}%</div>
      </div>
    </CircularProgressbarWithChildren>
  )
}
