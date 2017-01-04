/**
 * Created by kunl on 2016/11/2-0002.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule, BaseRequestOptions, RequestOptions, Headers } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';


export class MyOptions extends BaseRequestOptions {
    headers = new Headers({
        'author': 'kunl-------------------',
        'Content-Type': 'application/json'
    })
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(<Routes>[
            { path: '', loadChildren: './home#HomeModule', pathMatch: 'full' },
            { path: 'post', loadChildren: './post#PostModule'},
            { path: 'about', loadChildren: './about#AboutModule' },
        ])
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        {
            provide: BaseRequestOptions, useClass: MyOptions
        },
        {
            provide: APP_BASE_HREF, useValue: '/'
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
