import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component'

import { HomeService } from './home.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        RouterModule.forChild([{
            path: '', component: HomeComponent
        }])
    ],
    declarations: [HomeComponent],
    providers: [
        HomeService
    ]
})

export class HomeModule{}