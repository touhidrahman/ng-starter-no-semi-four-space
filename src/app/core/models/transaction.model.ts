import { Account } from './account.model'
import { Category, SubCategory } from './category.model'

export enum TransactionCategory {
    FoodAndDrink = 'Food & Drink',
    Shopping = 'Shopping',
    Transport = 'Transport',
    Utilities = 'Utilities',
    Entertainment = 'Entertainment',
    Healthcare = 'Healthcare',
    Education = 'Education',
    Travel = 'Travel',
    Miscellaneous = 'Miscellaneous',
}

export type TransactionDirection = 'income' | 'expense' | 'transfer'

export type Transaction = {
    id: string
    amount: number
    direction: TransactionDirection
    description?: string
    payee: string
    category?: Category | null
    subcategory?: SubCategory | null
    account: Account
    TransactionTime: string | Date
    notes?: string
    tags?: string[]
    recurringTransaction: RecurringTransaction | null
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
