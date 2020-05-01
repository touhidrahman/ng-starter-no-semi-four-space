import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './components/app.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

@NgModule({
    declarations: [AppComponent, PageNotFoundComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        RouterModule,
        HttpClientModule,

        // ROUTING
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
