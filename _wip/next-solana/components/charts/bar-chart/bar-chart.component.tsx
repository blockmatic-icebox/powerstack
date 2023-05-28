'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

import { platform } from '~/lib/platform'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function BarChart(props: { chartData: any[]; chartOptions: any }) {
  const [state, setState] = useState({
    chartData: props.chartData,
    chartOptions: props.chartOptions,
  })

  useEffect(() => {
    //setState({chartData: props.chartData, chartOptions: props.chartOptions})
  }, [state])
  if (!platform.isNode) return <></>
  return (
    <Chart
      options={state.chartOptions}
      series={state.chartData}
      type="bar"
      width="100%"
      height="100%"
    />
  )
}
