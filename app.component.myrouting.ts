import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ServiceComponent} from './app.component.services';
import {ContactusComponent} from './app.component.contactus';
import {ContentComponent} from './app.component.content';
import {StartComponent} from './app.component.start';
const routes=[
    {
        path:"", redirectTo:'home',pathMatch:'full'
    },
    {
        path:'home', component:StartComponent,data:{state:'home'}
    },
    {
        path:'services', component:ServiceComponent,data:{state:'service'}
    },
    {
        path:'contactus', component:ContactusComponent,data:{state:'aboutus'}
    }
]

export const Myrouter=RouterModule.forRoot(routes,{useHash:true});