export interface Category {
    id: number
    name: string
    icon?: string | null
    subcategories?: SubCategory[]
}

export interface SubCategory {
    id: number
    name: string
    icon?: string | null
    category?: Category | null
}
