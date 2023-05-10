'use client'

import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import { platform } from '~/lib/platform'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function PieChart(props: { chartData: ApexOptions['series']; chartOptions: ApexOptions }) {
  const [state] = useState({
    chartData: props.chartData,
    chartOptions: props.chartOptions,
  })

  if (platform.isNode) return <></>
  return (
    <ReactApexChart
      options={state.chartOptions}
      series={state.chartData}
      type="pie"
      width="100%"
      height="100%"
    />
  )
}

export default PieChart
