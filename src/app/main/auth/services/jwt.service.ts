import { Injectable } from '@angular/core'
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
    providedIn: 'root',
})
export class JwtService {
    private jwtHelper = new JwtHelperService()

    decodeToken<T>(token: string): T | null {
        return this.jwtHelper.decodeToken(token)
    }

    isTokenExpired(token: string) {
        return this.jwtHelper.isTokenExpired(token)
    }

    getUnexpiredDecoded<T>(token: string): T | null {
        if (!token) return null
        if (this.isTokenExpired(token)) return null
        return this.decodeToken<T>(token)
    }
}
