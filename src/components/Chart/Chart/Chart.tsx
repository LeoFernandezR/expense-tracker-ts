import React from "react"

import ChartBar from "../ChartBar/ChartBar"

import "./Chart.css"

interface ChartProps {
  dataPoints: {
    label: string
    value: number
  }[]
}

const Chart: React.FC<ChartProps> = ({dataPoints}) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value)
  const maxValue = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={maxValue}
          value={dataPoint.value}
        />
      ))}
    </div>
  )
}

export default Chart
