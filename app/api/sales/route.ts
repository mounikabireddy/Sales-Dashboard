import { NextResponse } from 'next/server'
import { generateMockSalesData } from '../../../lib/data'

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Generate mock data
    const salesData = generateMockSalesData()
    
    return NextResponse.json({
      success: true,
      data: salesData,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch sales data',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Here you could implement logic to save or update sales data
    // For now, we'll just return a success response
    
    return NextResponse.json({
      success: true,
      message: 'Sales data updated successfully',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update sales data',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
