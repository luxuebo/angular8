
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from '../views/home/home.component';
import {DirectiveComponent} from '../views/home/component/directive/directive.component'
import {EventComponent} from '../views/home/component/event/event.component'
import {ServiceComponent} from '../views/home/component/service/service.component'
import {LifecycleComponent} from '../views/home/component/lifecycle/lifecycle.component'
import {AjaxComponent} from '../views/home/component/ajax/ajax.component'

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
        path:'event',
        component:EventComponent
      },{
        path:'service',
        component:ServiceComponent
      },{
        path:'lifecycle',
        component:LifecycleComponent
      },{
        path:'ajax',
        component:AjaxComponent
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