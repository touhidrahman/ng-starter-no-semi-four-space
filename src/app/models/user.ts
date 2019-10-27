export interface IUser {
    id: number
    name?: string
    username?: string
    email?: string
    address?: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: number
            lng: number
        }
    }
    phone?: string
    website?: string
    company?: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export class User implements IUser {
    id: number
    name?: string
    username?: string
    email?: string
    address?: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: number
            lng: number
        }
    }
    phone?: string
    website?: string
    company?: {
        name: string
        catchPhrase: string
        bs: string
    }

    constructor(props: IUser) {
        Object.keys(props).forEach((prop) => {
            const value = props[prop]
            this[prop] = value
        })
    }
}
