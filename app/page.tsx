import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Sales Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A comprehensive sales analytics dashboard built with Next.js 15, TypeScript, 
          Tailwind CSS, and Recharts following atomic design principles.
        </p>
        <Link 
          href="/dashboard" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          View Dashboard
        </Link>
      </div>
    </div>
  )
}
