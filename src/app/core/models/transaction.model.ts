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

export type Transaction = {
    id: string
    amount: number
    date: string
    payee: string
    category: TransactionCategory
    account: string
}
