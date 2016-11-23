/**
 * Created by kunl on 2016/11/2-0002.
 */

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from '../nav/nav.component'
import { FooterComponent } from '../footer/footer.component'
import { PostComponent } from '../post/post.component'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
        // AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        PostComponent
    ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})
export class AppModule { }
