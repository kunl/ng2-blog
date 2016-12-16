/**
 * Created by kunl on 2016/11/2-0002.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', loadChildren: './home#HomeModule', pathMatch: 'full' },
            { path: 'about', loadChildren: './about#AboutModule' },
        ])
    ],
    declarations: [
        AppComponent
    ],
    providers: [{
        provide: APP_BASE_HREF, useValue: '/'
    }],
    bootstrap: [AppComponent],
})
export class AppModule { }
