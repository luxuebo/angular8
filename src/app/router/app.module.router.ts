
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from '../views/home/home.component';
import {DirectiveComponent} from '../views/home/subviews/directive/directive.component'
import {NgmodelComponent} from '../views/home/subviews/ngmodel/ngmodel.component'
import {ChildParentComponent} from '../views/home/subviews/child-parent/child-parent.component'
import {RouterJumpComponent} from '../views/home/subviews/router-jump/router-jump.component'
import {LinkGetComponent} from '../views/home/subviews/router-jump/subviews/link-get/link-get.component'
import {LinkDynamicComponent} from '../views/home/subviews/router-jump/subviews/link-dynamic/link-dynamic.component'
import {JsGetComponent} from '../views/home/subviews/router-jump/subviews/js-get/js-get.component'
import {JsDynamicComponent} from '../views/home/subviews/router-jump/subviews/js-dynamic/js-dynamic.component'
import {EventComponent} from '../views/home/subviews/event/event.component'
import {ServiceComponent} from '../views/home/subviews/service/service.component'
import {LifecycleComponent} from '../views/home/subviews/lifecycle/lifecycle.component'
import {HttpRequestComponent} from '../views/home/subviews/http-request/http-request.component'

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
        path:'routerjump',
        component:RouterJumpComponent,
        children:[{
          path:'linkget',
          component:LinkGetComponent,
        },{
          path:'linkdynamic/:id',
          component:LinkDynamicComponent,
        },{
          path:'jsget',
          component:JsGetComponent,
        },{
          path:'jsdynamic/:id',
          component:JsDynamicComponent,
        }]
      },{
        path:'http',
        component:HttpRequestComponent
      }]
    },
    {
      path:'notes',
      component:NotesComponent,
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