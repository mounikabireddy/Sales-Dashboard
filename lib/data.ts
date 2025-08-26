export interface SalesData {
  year: string
  sales: number
}

// Generate mock sales data for 2022, 2023, 2024
export const generateMockSalesData = (): SalesData[] => {
  return [
    {
      year: '2022',
      sales: Math.floor(Math.random() * 500000) + 200000 // 200k - 700k
    },
    {
      year: '2023',
      sales: Math.floor(Math.random() * 800000) + 300000 // 300k - 1.1M
    },
    {
      year: '2024',
      sales: Math.floor(Math.random() * 1200000) + 400000 // 400k - 1.6M
    }
  ]
}

// Mock API function to simulate fetching data
export const fetchSalesData = async (): Promise<SalesData[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Return mock data
  return generateMockSalesData()
}

// Calculate sales statistics
export const calculateSalesStats = (data: SalesData[]) => {
  const totalSales = data.reduce((sum, item) => sum + item.sales, 0)
  const averageSales = data.length > 0 ? totalSales / data.length : 0
  const maxSales = Math.max(...data.map(item => item.sales))
  const minSales = Math.min(...data.map(item => item.sales))
  
  return {
    totalSales,
    averageSales,
    maxSales,
    minSales,
    dataPoints: data.length
  }
}
