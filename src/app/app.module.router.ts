
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from './views/home/home.component';
import {MineComponent} from './views/mine/mine.component';

const appRoutes: Routes = [
    {
        path:'home',
        component: HomeComponent,

    },
    {
        path:'mine',
        component: MineComponent,
        
    }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppModuleRouter { }