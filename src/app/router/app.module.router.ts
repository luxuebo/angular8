
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from '../views/home/home.component';
import {DirectiveComponent} from '../views/home/component/directive/directive.component'
import {NgmodelComponent} from '../views/home/component/ngmodel/ngmodel.component'
import {ChildParentComponent} from '../views/home/component/child-parent/child-parent.component'


import {EventComponent} from '../views/home/component/event/event.component'
import {ServiceComponent} from '../views/home/component/service/service.component'
import {LifecycleComponent} from '../views/home/component/lifecycle/lifecycle.component'
import {HttpRequestComponent} from '../views/home/component/http-request/http-request.component'


import {MineComponent} from '../views/mine/mine.component';
import {NotesComponent} from '../views/notes/notes.component';
import {FourzerofourComponent} from '../views/fourzerofour/fourzerofour.component'

const appRoutes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'

    },
    {
      path:'home',
      component:HomeComponent,
      children:[{
        path:'directive',
        component:DirectiveComponent
      },{
        path:'ngmodel',
        component:NgmodelComponent
      },{
        path:'childParent',
        component:ChildParentComponent
      },{
        path:'event',
        component:EventComponent
      },{
        path:'service',
        component:ServiceComponent
      },{
        path:'lifecycle',
        component:LifecycleComponent
      },{
        path:'http',
        component:HttpRequestComponent
      }]
    },
    {
      path:'notes',
      component:NotesComponent
    },
    {
        path:'mine',
        component: MineComponent,
        
    },
    {
      path:'**',
      component:FourzerofourComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppModuleRouter { }