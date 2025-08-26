import React from 'react'
import Button from '../atoms/Button'

export type ChartType = 'bar' | 'line' | 'pie'

interface ChartSelectorProps {
  selectedChart: ChartType
  onChartChange: (chartType: ChartType) => void
}

const ChartSelector: React.FC<ChartSelectorProps> = ({ selectedChart, onChartChange }) => {
  const chartTypes: { type: ChartType; label: string; icon: string }[] = [
    { type: 'bar', label: 'Bar Chart', icon: '📊' },
    { type: 'line', label: 'Line Chart', icon: '📈' },
    { type: 'pie', label: 'Pie Chart', icon: '🥧' },
  ]

  return (
    <div className="flex space-x-2">
      {chartTypes.map(({ type, label, icon }) => (
        <Button
          key={type}
          variant={selectedChart === type ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onChartChange(type)}
          className="flex items-center space-x-2"
        >
          <span>{icon}</span>
          <span>{label}</span>
        </Button>
      ))}
    </div>
  )
}

export default ChartSelector
