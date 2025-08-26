import React from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { ChartType } from '../molecules/ChartSelector'

interface SalesData {
  year: string
  sales: number
  color?: string
}

interface SalesChartProps {
  data: SalesData[]
  chartType: ChartType
  threshold: number
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

const SalesChart: React.FC<SalesChartProps> = ({ data, chartType, threshold }) => {
  const filteredData = data.filter(item => item.sales >= threshold)
  
  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar 
          dataKey="sales" 
          fill="#3b82f6"
          stroke="#1d4ed8"
          strokeWidth={2}
        />
      </BarChart>
    </ResponsiveContainer>
  )

  const renderLineChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="sales" 
          stroke="#3b82f6" 
          strokeWidth={3}
          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )

  const renderPieChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={filteredData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ year, sales }) => `${year}: $${sales.toLocaleString()}`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="sales"
        >
          {filteredData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Sales']} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return renderBarChart()
      case 'line':
        return renderLineChart()
      case 'pie':
        return renderPieChart()
      default:
        return renderBarChart()
    }
  }

  return (
    <div className="w-full">
      {filteredData.length === 0 ? (
        <div className="flex items-center justify-center h-64 text-gray-500">
          <p>No data available for the selected threshold.</p>
        </div>
      ) : (
        renderChart()
      )}
    </div>
  )
}

export default SalesChart
