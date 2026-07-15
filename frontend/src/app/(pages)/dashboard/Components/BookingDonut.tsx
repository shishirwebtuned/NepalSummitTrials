// app/(pages)/dashboard/Components/BookingDonut.tsx
'use client'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function BookingDonut({
    paid = 0,
    pending = 0,
    cancelled = 0,
}: {
    paid?: number
    pending?: number
    cancelled?: number
}) {
    const options: ApexCharts.ApexOptions = {
        chart: { type: 'donut', fontFamily: 'Plus Jakarta Sans, sans-serif' },
        labels: ['Paid', 'Pending', 'Cancelled'],
        colors: ['#0A5482', '#f59e0b', '#ef4444'],
        legend: {
            position: 'bottom',
            fontSize: '12px',
            fontFamily: 'Plus Jakarta Sans',
            labels: { colors: '#64748b' },
            markers: { size: 6 },
        },
        dataLabels: { enabled: false },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: 'Total',
                            fontSize: '13px',
                            fontFamily: 'Plus Jakarta Sans',
                            color: '#94a3b8',
                            formatter: (w) =>
                                w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0),
                        },
                        value: {
                            fontSize: '22px',
                            fontFamily: 'Plus Jakarta Sans',
                            fontWeight: 600,
                            color: '#0d1f2d',
                        },
                    },
                },
            },
        },
        stroke: { width: 0 },
        tooltip: { style: { fontFamily: 'Plus Jakarta Sans' } },
    }

    const series = [paid, pending, cancelled]

    // Show empty state if no data
    if (paid + pending + cancelled === 0) {
        return (
            <div className="flex items-center justify-center h-40">
                <p className="text-sm text-slate-400">No booking data yet.</p>
            </div>
        )
    }

    return <Chart type="donut" options={options} series={series} height={220} width="100%" />
}