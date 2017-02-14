import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'About',
    templateUrl: 'about.component.html'
})

export class AboutComponent{}

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '', component: AboutComponent
        }])
    ],
    declarations: [AboutComponent]
})

export class AboutModule{}