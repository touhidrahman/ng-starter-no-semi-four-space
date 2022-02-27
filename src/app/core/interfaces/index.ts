export interface User extends UserDto {
    id: string
    passwordHash: string
    emailVerified: boolean
    registrationDate: Date
    role: UserRole
}
export interface UserDto {
    id?: string
    email: string
    firstName: string
    lastName: string
    image: string | null
    birthDate: Date | null
}

export interface Asset {
    id: string
    bucket: string
    mimetype: string
    name: string
    size: number
    url: string
    createdAt: Date
    updatedAt: Date
}

export enum UserRole {
    ADMIN = 'ADMIN',
    MODERATOR = 'MODERATOR',
    USER = 'USER',
}
