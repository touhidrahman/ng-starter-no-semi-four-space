import { User } from '@main/users/models/user.model'

export interface LoginResponse {
    user: User
    refreshToken: string
    accessToken: string
}
