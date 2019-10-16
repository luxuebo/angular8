import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
//路由
import { AppModuleRouter } from './router/app.module.router';
//组件
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NotesComponent } from './views/notes/notes.component';
import { MineComponent } from './views/mine/mine.component';
import { FourzerofourComponent } from './views/fourzerofour/fourzerofour.component';

import { TitleComponent } from './components/title/title.component';
import { HomeContentComponent } from './components/homecontent/homecontent.component';
import { NavigationComponent } from './components/navigation/navigation.component';


//服务
import {HeroService} from './services/hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    HomeContentComponent,
    TitleComponent,
    FourzerofourComponent,
    NavigationComponent,
    NotesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,//数据双向绑定
    AppModuleRouter
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
