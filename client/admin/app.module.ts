/**
 * Created by kunl on 2016/11/2-0002.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent, WelcomeComponent } from './app.component';
import { NavComponent } from './nav/nav.component'
import { FooterComponent } from './footer/footer.component'



export const AppRouter: Routes = [
    {
        path: '', component: WelcomeComponent, pathMatch: 'full'
    },
    {
        path: 'post', loadChildren: './post/post.module#PostModule'
    }
]


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(AppRouter)
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        NavComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
