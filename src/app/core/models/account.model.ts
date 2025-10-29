export enum AccountType {
    Credit = 'Credit',
    Debit = 'Debit',
    Checking = 'Checking',
    Savings = 'Savings',
    Loan = 'Loan',
    Hand = 'Hand',
}

export interface Account {
    $id?: string
    name: string // account nickname
    type: AccountType
    accountName?: string // for bank, account holder name, for card name on card
    accountNumber?: string // credit card or bank account number
    balance?: number
    bankName?: string // bank name or card issuer name
    currency?: string
    useForNetWorth?: boolean
    monthlyBudget?: number
    // Loan specific fields
    loan_subject?: string
    loan_startDate?: string
    loan_endDate?: string
    loan_interestRate?: number
    // card specific fields
    card_limit?: number
    card_expiry?: Date
    monthlyDueDate?: number // e.g - 15 for 15th of each month
    monthlyStatementDate?: number // e.g - 20 for 20th of each month
    // bank account specific fields
    bank_routing?: string
}
