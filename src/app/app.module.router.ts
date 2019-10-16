
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from './views/home/home.component';
import {MineComponent} from './views/mine/mine.component';
import {FourzerofourComponent} from './views/fourzerofour/fourzerofour.component'

const appRoutes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'

    },
    {
      path:'home',
      component:HomeComponent
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