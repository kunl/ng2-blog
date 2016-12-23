import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from "@angular/http";

import { PostComponent } from './post.component';
import { ListComponent } from './list';
import { DetailComponent } from './detail';

import { PostService } from './post.service'

@NgModule({
    imports: [
        HttpModule,
        RouterModule.forChild(<Routes>[
            {
                path: '', redirectTo: '/about', pathMatch: 'full',
            },

            {
                path: 'list',
                component: ListComponent
            },

            {
                path: ':id',

                component: DetailComponent
            }
        ])
    ],
    declarations: [
        PostComponent,
        ListComponent,
        DetailComponent
    ],
    providers: [
        PostService
    ]
})
export class PostModule {

}