// components/dashboard/RevenueChart.tsx
'use client'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function RevenueChart({ monthlyData }: { monthlyData: number[] }) {
    const options: ApexCharts.ApexOptions = {
        chart: {
            type: 'area',
            toolbar: { show: false },
            zoom: { enabled: false },
            fontFamily: 'Plus Jakarta Sans, sans-serif',
        },
        stroke: { curve: 'smooth', width: 2 },
        fill: {
            type: 'gradient',
            gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.01, stops: [0, 100] },
        },
        colors: ['#0A5482'],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: { style: { fontSize: '11px', colors: '#94a3b8', fontFamily: 'Plus Jakarta Sans' } },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                style: { fontSize: '11px', colors: '#94a3b8', fontFamily: 'Plus Jakarta Sans' },
                formatter: (v) => `$${v.toLocaleString()}`,
            },
        },
        grid: { borderColor: '#f1f5f9', strokeDashArray: 4, padding: { left: 0, right: 0 } },
        dataLabels: { enabled: false },
        tooltip: {
            y: { formatter: (v) => `$${v.toLocaleString()}` },
            style: { fontFamily: 'Plus Jakarta Sans' },
        },
        markers: { size: 0, hover: { size: 4 } },
    }

    const series = [{ name: 'Revenue', data: monthlyData }]

    if (monthlyData.every((v) => v === 0)) {
        return (
            <div className="flex items-center justify-center h-[180px]">
                <p className="text-sm text-slate-400">No revenue data yet.</p>
            </div>
        )
    }

    return <Chart type="area" options={options} series={series} height={180} width="100%" />
}