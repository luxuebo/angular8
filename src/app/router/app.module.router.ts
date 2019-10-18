
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from '../pages/home/home.component';
import {DirectiveComponent} from '../pages/home/subviews/directive/directive.component'
import {NgmodelComponent} from '../pages/home/subviews/ngmodel/ngmodel.component'
import {ChildParentComponent} from '../pages/home/subviews/child-parent/child-parent.component'
import {RouterJumpComponent} from '../pages/home/subviews/router-jump/router-jump.component'
import {LinkGetComponent} from '../pages/home/subviews/router-jump/subviews/link-get/link-get.component'
import {LinkDynamicComponent} from '../pages/home/subviews/router-jump/subviews/link-dynamic/link-dynamic.component'
import {JsGetComponent} from '../pages/home/subviews/router-jump/subviews/js-get/js-get.component'
import {JsDynamicComponent} from '../pages/home/subviews/router-jump/subviews/js-dynamic/js-dynamic.component'
import {EventComponent} from '../pages/home/subviews/event/event.component'
import {ServiceComponent} from '../pages/home/subviews/service/service.component'
import {PipeComponent} from '../pages/home/subviews/pipe/pipe.component'
import {LifecycleComponent} from '../pages/home/subviews/lifecycle/lifecycle.component'
import {HttpRequestComponent} from '../pages/home/subviews/http-request/http-request.component'

import {MineComponent} from '../pages/mine/mine.component';
import {NotesComponent} from '../pages/notes/notes.component';
import {FourzerofourComponent} from '../pages/fourzerofour/fourzerofour.component'

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
        path:'pipe',
        component:PipeComponent
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