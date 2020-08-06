import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component'

@NgModule({
    declarations: [AppComponent, PageNotFoundComponent],
    imports: [BrowserAnimationsModule, BrowserModule, RouterModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
