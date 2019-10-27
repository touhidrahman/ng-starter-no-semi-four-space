export interface ITodo {
    id: number
    userId?: number
    title?: string
    completed?: boolean
}

export class Todo implements ITodo {
    id: number
    userId: number
    title: string
    completed: boolean

    constructor(props: ITodo) {
        Object.keys(props).forEach((prop) => {
            const value = props[prop]
            this[prop] = value
        })
    }
}
