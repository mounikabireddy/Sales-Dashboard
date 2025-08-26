import React, { useState } from 'react'
import ChartSelector, { ChartType } from '../molecules/ChartSelector'
import SalesFilter from '../molecules/SalesFilter'
import SalesChart from '../organisms/SalesChart'
import SalesSummary from '../organisms/SalesSummary'
import Card from '../atoms/Card'

interface SalesData {
  year: string
  sales: number
}

interface DashboardTemplateProps {
  data: SalesData[]
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ data }) => {
  const [selectedChart, setSelectedChart] = useState<ChartType>('bar')
  const [threshold, setThreshold] = useState<number>(0)

  const handleThresholdChange = (newThreshold: number) => {
    setThreshold(newThreshold)
  }

  const handleReset = () => {
    setThreshold(0)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sales Dashboard</h1>
          <p className="text-gray-600">Analyze sales performance across different years</p>
        </div>

        {/* Controls Section */}
        <Card title="Dashboard Controls" className="mb-6">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Chart Type</h4>
              <ChartSelector
                selectedChart={selectedChart}
                onChartChange={setSelectedChart}
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Sales Filter</h4>
              <SalesFilter
                threshold={threshold}
                onThresholdChange={handleThresholdChange}
                onReset={handleReset}
              />
            </div>
          </div>
        </Card>

        {/* Summary Cards */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Sales Summary</h2>
          <SalesSummary data={data} threshold={threshold} />
        </div>

        {/* Chart Section */}
        <Card title="Sales Visualization">
          <SalesChart
            data={data}
            chartType={selectedChart}
            threshold={threshold}
          />
        </Card>
      </div>
    </div>
  )
}

export default DashboardTemplate
