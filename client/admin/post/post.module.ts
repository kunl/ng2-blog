import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { PostComponent } from './post.component'
import { ListComponent } from './list/list.component'


export const PostRouter: Routes = [

    

    {
        path: '', component: PostComponent, pathMatch: 'full',
        // children: [
        //     // {
        //     //     path: '', component: ListComponent
        //     // },

        // ]
    },
    {
        path: 'list', component: ListComponent
    }

]



@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild(PostRouter)
    ],
    declarations: [
        PostComponent,
        ListComponent
    ]
})

export class PostModule {

}