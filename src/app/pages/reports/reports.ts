import { Component } from '@angular/core'
import { ChartData, ChartOptions } from 'chart.js'

export type SpendingItem = {
    category: string
    amount: number
    percentage: number
}

@Component({
    selector: 'app-reports',
    templateUrl: './reports.html',
})
export class ReportsComponent {
    spendingTotal = 12345
    spendingGrowth = 12
    spendingOverTimeTotal = 12345
    apendingOverTimeChange = 5

    spendingChartData: ChartData<'bar'> = {
        labels: [
            'Groceries',
            'Utilities',
            'Entertainment',
            'Transport',
            'Healthcare',
            'Others',
        ],
        datasets: [
            {
                data: [3000, 2000, 1500, 2500, 1000, 2000],
                label: 'Spending',
                backgroundColor: '#42A5F5',
            },
        ],
    }

    spendingOverTimeChartData: ChartData<'line'> = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        datasets: [
            {
                data: [
                    1000, 1200, 1500, 1300, 1700, 1600, 1800, 2000, 2200, 2100,
                    2300, 2500,
                ],
                label: 'Spending Over Time',
                borderColor: '#66BB6A',
                fill: false,
            },
        ],
    }

    spendingItems: SpendingItem[] = [
        { category: 'Groceries', amount: 3000, percentage: 24 },
        { category: 'Utilities', amount: 2000, percentage: 16 },
        { category: 'Entertainment', amount: 1500, percentage: 12 },
        { category: 'Transport', amount: 2500, percentage: 20 },
        { category: 'Healthcare', amount: 1000, percentage: 8 },
        { category: 'Others', amount: 2000, percentage: 16 },
    ]

    incomeChartData: ChartData<'bar'> = {
        labels: ['Salary', 'Freelance', 'Investments', 'Gifts', 'Others'],
        datasets: [
            {
                data: [5000, 2000, 1500, 1000, 500],
                label: 'Income',
                backgroundColor: '#FFA726',
            },
        ],
    }

    netWorthChartData: ChartData<'line'> = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        datasets: [
            {
                data: [
                    10000, 10500, 11000, 12000, 12500, 13000, 13500, 14000,
                    14500, 15000, 15500, 16000,
                ],
                label: 'Net Worth Over Time',
                borderColor: '#AB47BC',
                fill: false,
            },
        ],
    }

    chartOptions: ChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    }
}
