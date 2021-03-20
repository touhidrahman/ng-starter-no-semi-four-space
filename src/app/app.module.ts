import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { iconsPathFactory, TUI_ICONS_PATH, TuiDialogModule, TuiNotificationsModule, TuiRootModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        TuiRootModule,
        TuiNotificationsModule,
        TuiDialogModule,
        AppRoutingModule,
    ],
    providers: [
        {
            provide: TUI_ICONS_PATH,
            useValue: iconsPathFactory('assets/taiga-ui/icons/'),
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
