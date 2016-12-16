import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { PostService } from './post.service';
import { PostComponent } from './post.component'
import { ListComponent } from './list/list.component'


export const PostRouter: Routes = [
    {
        path: '', component: PostComponent,
        children: [
            { path: 'list', component: ListComponent}
        ]
    }
]



@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        RouterModule.forChild(PostRouter)
    ],
    declarations: [
        PostComponent,
        ListComponent
    ],
    providers: [ PostService ]
})

export class PostModule {

}