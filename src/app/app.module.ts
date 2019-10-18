import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';//angular中的http模块

//路由
import { AppModuleRouter } from './router/app.module.router';
//组件
import { AppComponent } from './app.component';//根组件
import { HomeComponent } from './views/home/home.component';
import { DirectiveComponent } from './views/home/subviews/directive/directive.component';
import { EventComponent } from './views/home/subviews/event/event.component';
import { ServiceComponent } from './views/home/subviews/service/service.component';
import { PipeComponent } from './views/home/subviews/pipe/pipe.component';
import { LifecycleComponent } from './views/home/subviews/lifecycle/lifecycle.component';
import { NgmodelComponent } from './views/home/subviews/ngmodel/ngmodel.component';
import { ChildParentComponent } from './views/home/subviews/child-parent/child-parent.component';
import { ChildComponent } from './views/home/subviews/child-parent/child/child.component';
import { ParentComponent } from './views/home/subviews/child-parent/parent/parent.component';
import { RouterJumpComponent } from './views/home/subviews/router-jump/router-jump.component';
import { LinkGetComponent } from './views/home/subviews/router-jump/subviews/link-get/link-get.component';
import { LinkDynamicComponent } from './views/home/subviews/router-jump/subviews/link-dynamic/link-dynamic.component';
import { JsGetComponent } from './views/home/subviews/router-jump/subviews/js-get/js-get.component';
import { JsDynamicComponent } from './views/home/subviews/router-jump/subviews/js-dynamic/js-dynamic.component';
import { HttpRequestComponent } from './views/home/subviews/http-request/http-request.component';
import { NotesComponent } from './views/notes/notes.component';
import { MineComponent } from './views/mine/mine.component';
import { FourzerofourComponent } from './views/fourzerofour/fourzerofour.component';
import { TitleComponent } from './components/title/title.component';
import { NavigationComponent } from './components/navigation/navigation.component';


//服务
import {HeroService} from './services/hero.service';

//自定义指令
import { FontColorDirective } from './directives/font-color.directive';
import { HumpNamePipe } from './pipes/humpName/hump-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MineComponent,
    TitleComponent,
    FourzerofourComponent,
    NavigationComponent,
    NotesComponent,
    DirectiveComponent,
    EventComponent,
    ServiceComponent,
    LifecycleComponent,
    NgmodelComponent,
    ChildParentComponent,
    HttpRequestComponent,
    RouterJumpComponent,
    LinkGetComponent,
    LinkDynamicComponent,
    JsGetComponent,
    JsDynamicComponent,
    ChildComponent,
    ParentComponent,
    FontColorDirective,
    PipeComponent,
    HumpNamePipe,
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
