export enum UserRole {
    ADMIN = 'ADMIN',
    MODERATOR = 'MODERATOR',
    USER = 'USER',
}

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
