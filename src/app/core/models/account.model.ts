export enum AccountTypeEnum {
    Credit = 'Credit',
    Debit = 'Debit',
    Checking = 'Checking',
    Savings = 'Savings',
    Loan = 'Loan',
}

export interface Account {
    name: string
    type: AccountTypeEnum
    accountName?: string
    accountNumber?: string
    balance?: number
    bankName?: string
    currency?: string
    useForNetWorth?: boolean
    // Loan specific fields
    loan_subject?: string
    loan_startDate?: string
    loan_endDate?: string
    loan_interestRate?: number
    monthlyDueDate?: string
}
