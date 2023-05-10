'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

import { platform } from '~/lib/platform'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function LineChart(props: { chartData: any[]; chartOptions: any }) {
  const [state, setState] = useState({
    chartData: props.chartData,
    chartOptions: props.chartOptions,
  })

  //if(isWindowAvailable()) return <></>
  return (
    <ReactApexChart
      options={state.chartOptions}
      series={state.chartData}
      type="line"
      width="100%"
      height="100%"
    />
  )
}
