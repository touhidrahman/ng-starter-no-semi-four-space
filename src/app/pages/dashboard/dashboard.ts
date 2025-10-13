import { CurrencyPipe, DatePipe, NgClass, TitleCasePipe } from '@angular/common'
import { Component } from '@angular/core'
import { OverviewCardComponent } from '@main/dashboard/overview-card/overview-card'
import { ChartComponent } from '@main/shared/chart/chart'
import { TableModule } from 'primeng/table'

export type Transaction = {
    id: number
    account: string
    category: string
    date: string
    amount: number
    type: 'income' | 'expense'
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.scss'],
    imports: [
        OverviewCardComponent,
        CurrencyPipe,
        TableModule,
        NgClass,
        TitleCasePipe,
        DatePipe,
        ChartComponent,
    ],
})
export class DashboardComponent {
    userCurrency = 'USD'

    totalBalance = 18765
    monthlyIncome = 3250
    monthlyExpenses = 1250

    recentTransactions: Transaction[] = [
        {
            id: 1,
            account: 'Checking',
            category: 'Income',
            date: '2024-06-01',
            amount: 3000,
            type: 'income',
        },
        {
            id: 2,
            account: 'Checking',
            category: 'Groceries',
            date: '2024-06-03',
            amount: -150,
            type: 'expense',
        },
        {
            id: 3,
            account: 'Credit Card',
            category: 'Dining',
            date: '2024-06-05',
            amount: -75,
            type: 'expense',
        },
        {
            id: 4,
            account: 'Savings',
            category: 'Transfer',
            date: '2024-06-07',
            amount: -500,
            type: 'expense',
        },
        {
            id: 5,
            account: 'Checking',
            category: 'Salary',
            date: '2024-06-10',
            amount: 2500,
            type: 'income',
        },
    ]

    spendingByCategoryData = {
        labels: ['Groceries', 'Dining', 'Utilities', 'Entertainment', 'Others'],
        datasets: [
            {
                data: [500, 300, 200, 150, 100],
                backgroundColor: [
                    '#3b82f6',
                    '#10b981',
                    '#f59e0b',
                    '#ef4444',
                    '#8b5cf6',
                ],
                hoverBackgroundColor: [
                    '#2563eb',
                    '#059669',
                    '#d97706',
                    '#dc2626',
                    '#7c3aed',
                ],
            },
        ],
    }

    spendingByCategoryOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: '#000',
                },
            },
        },
    }
}
