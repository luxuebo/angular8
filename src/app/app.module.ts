import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';//angular中的http模块

//路由
import { AppModuleRouter } from './router/app.module.router';
//组件
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DirectiveComponent } from './views/home/component/directive/directive.component';
import { EventComponent } from './views/home/component/event/event.component';
import { ServiceComponent } from './views/home/component/service/service.component';
import { LifecycleComponent } from './views/home/component/lifecycle/lifecycle.component';
import { AjaxComponent } from './views/home/component/ajax/ajax.component';
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
    DirectiveComponent,
    EventComponent,
    ServiceComponent,
    LifecycleComponent,
    AjaxComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,//数据双向绑定
    AppModuleRouter,//路由
    HttpClientModule,//http请求
    HttpClientJsonpModule//jsonp请求

  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
