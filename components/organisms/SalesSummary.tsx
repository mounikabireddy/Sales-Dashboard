import React from 'react'
import Card from '../atoms/Card'

interface SalesData {
  year: string
  sales: number
}

interface SalesSummaryProps {
  data: SalesData[]
  threshold: number
}

const SalesSummary: React.FC<SalesSummaryProps> = ({ data, threshold }) => {
  const filteredData = data.filter(item => item.sales >= threshold)
  
  const totalSales = filteredData.reduce((sum, item) => sum + item.sales, 0)
  const averageSales = filteredData.length > 0 ? totalSales / filteredData.length : 0
  const maxSales = Math.max(...filteredData.map(item => item.sales), 0)
  const minSales = Math.min(...filteredData.map(item => item.sales), Infinity)
  
  const metrics = [
    {
      label: 'Total Sales',
      value: `$${totalSales.toLocaleString()}`,
      color: 'text-blue-600',
      icon: '💰'
    },
    {
      label: 'Average Sales',
      value: `$${averageSales.toLocaleString()}`,
      color: 'text-green-600',
      icon: '📊'
    },
    {
      label: 'Highest Sales',
      value: `$${maxSales.toLocaleString()}`,
      color: 'text-purple-600',
      icon: '📈'
    },
    {
      label: 'Lowest Sales',
      value: `$${minSales.toLocaleString()}`,
      color: 'text-orange-600',
      icon: '📉'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="text-center">
          <div className="flex flex-col items-center">
            <span className="text-3xl mb-2">{metric.icon}</span>
            <h3 className="text-sm font-medium text-gray-500 mb-1">{metric.label}</h3>
            <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default SalesSummary
