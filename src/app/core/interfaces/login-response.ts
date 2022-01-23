import { User } from './user'

export interface LoginResponse {
    refreshToken: string
    token: string
    user: User
}
