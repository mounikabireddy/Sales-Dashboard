# Sales Dashboard - Next.js 15 Project

A comprehensive sales analytics dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts** following atomic design principles.

## 🚀 Features

### Core Features
- **Atomic Design Structure**: Organized components following atoms → molecules → organisms → templates → pages hierarchy
- **Interactive Charts**: Multiple chart types (Bar, Line, Pie) using Recharts
- **Mock Sales Data**: Realistic sales data for years 2022, 2023, 2024
- **Responsive Dashboard**: Clean, modern UI with Tailwind CSS

### Enhancements
- **Custom Filter Input**: Set sales threshold to highlight/filter values
- **Multiple Chart Types**: Switch between bar, line, and pie charts
- **Real-time Filtering**: Dynamic data filtering based on threshold
- **Sales Summary Cards**: Key metrics display (Total, Average, Highest, Lowest sales)
- **API Integration Ready**: Mock API endpoints for future real data integration

## 🏗️ Project Structure

```
Project/
├── app/
│   ├── api/sales/route.ts          # API endpoints
│   ├── dashboard/page.tsx          # Dashboard page
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Home page
├── components/
│   ├── atoms/                      # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── molecules/                  # Simple component combinations
│   │   ├── ChartSelector.tsx
│   │   └── SalesFilter.tsx
│   ├── organisms/                  # Complex UI components
│   │   ├── SalesChart.tsx
│   │   └── SalesSummary.tsx
│   └── templates/                  # Page-level layouts
│       └── DashboardTemplate.tsx
├── lib/
│   └── data.ts                     # Data utilities and mock data
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Composable charting library
- **React 18**: Latest React features

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sales-dashboard-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Home Page
- Visit the home page to see the project overview
- Click "View Dashboard" to access the main dashboard

### Dashboard Features
1. **Chart Type Selection**: Switch between Bar, Line, and Pie charts
2. **Sales Filter**: Set a minimum sales threshold to filter data
3. **Reset Filter**: Clear the threshold filter
4. **Real-time Updates**: Charts and summary cards update automatically

### API Integration
- **GET /api/sales**: Fetch sales data
- **POST /api/sales**: Update sales data (placeholder)

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Features

#### 1. Adding New Chart Types
1. Update `ChartType` in `components/molecules/ChartSelector.tsx`
2. Add new chart rendering logic in `components/organisms/SalesChart.tsx`
3. Update the chart selector buttons

#### 2. Adding Real API Integration
1. Replace mock data in `lib/data.ts` with real API calls
2. Update the `fetchSalesData` function to call your API
3. Handle loading states and error scenarios

#### 3. Adding New Filters
1. Create new filter components in `components/molecules/`
2. Update the `DashboardTemplate.tsx` to include new filters
3. Modify the data filtering logic in chart components

#### 4. Adding New Metrics
1. Update `SalesSummary.tsx` to include new metric cards
2. Add calculation logic in `lib/data.ts`
3. Update the metrics display

### Atomic Design Principles

This project follows atomic design methodology:

- **Atoms**: Basic building blocks (Button, Input, Card)
- **Molecules**: Simple component combinations (ChartSelector, SalesFilter)
- **Organisms**: Complex UI components (SalesChart, SalesSummary)
- **Templates**: Page-level layouts (DashboardTemplate)
- **Pages**: Complete pages with data (Dashboard page)

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update component styles in individual component files
- Global styles can be modified in `app/globals.css`

### Data Structure
- Update the `SalesData` interface in `lib/data.ts`
- Modify the mock data generation function
- Update chart components to handle new data fields

### Chart Customization
- Modify chart colors, sizes, and styles in `SalesChart.tsx`
- Add new chart configurations in Recharts components
- Update tooltip and legend formatting

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
1. Build the project: `npm run build`
2. Start the production server: `npm run start`
3. Deploy the `.next` folder to your hosting platform

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

If you have any questions or need help:
1. Check the documentation above
2. Review the code comments
3. Open an issue on GitHub

---

**Built with ❤️ using Next.js 15, TypeScript, Tailwind CSS, and Recharts**
