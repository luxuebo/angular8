import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
//路由
import { AppModuleRouter } from './app.module.router';
//组件
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MineComponent } from './views/mine/mine.component';

import { TitleComponent } from './components/title/title.component';
import { HomeContentComponent } from './components/homecontent/homecontent.component';


//服务
import {HeroService} from './services/hero.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    HomeContentComponent,
    TitleComponent,
    
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
