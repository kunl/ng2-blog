/**
 * Created by kunl on 2016/11/2-0002.
 */

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './.routing'; //TODO: Create .routing

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,

        // AppRoutingModule,
    ],
    declarations: [AppComponent],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})
export class AppModule { }
