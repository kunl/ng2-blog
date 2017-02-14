import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common'


import { PostComponent } from './post.component';
import { ListComponent } from './list';
import { DetailComponent } from './detail';
import { CommentComponent } from './comment'

import { PostService } from './post.service'

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
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
        DetailComponent,
        CommentComponent
    ],
    providers: [
        PostService
    ]
})
export class PostModule {

}