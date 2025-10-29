import { Account } from './account.model'
import { Category, SubCategory } from './category.model'

export type TransactionDirection = 'Incoming' | 'Outgoing'

export type Transaction = {
    $id?: string
    account: Account
    description?: string
    direction: TransactionDirection
    amount: number
    category?: Category | null
    subcategory?: SubCategory | null
    TransactionTime: string | Date
    note?: string
    recurringTransaction?: RecurringTransaction | null
}

interface RecurringTransaction {
    description?: string
    account?: Account // Relationship
    direction: TransactionDirection
    amount: number
    category?: Category // Relationship
    subcategory?: SubCategory // Relationship

    cron_weekday?: number
    cron_month?: number
    cron_dayOfMonth?: number
    cron_hour?: number
    cron_minute?: number

    skipCount?: number
    occuranceStartDate?: Date | string
    occuranceEndDate?: Date | string
    stopAfterNumberOfOccurance?: number
}
