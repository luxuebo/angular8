import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';//angular中的http模块

//路由
import { AppModuleRouter } from './router/app.module.router';
//组件
import { AppComponent } from './app.component';//根组件
import { HomeComponent } from './pages/home/home.component';
import { DirectiveComponent } from './pages/home/subviews/directive/directive.component';
import { EventComponent } from './pages/home/subviews/event/event.component';
import { ServiceComponent } from './pages/home/subviews/service/service.component';
import { PipeComponent } from './pages/home/subviews/pipe/pipe.component';
import { LifecycleComponent } from './pages/home/subviews/lifecycle/lifecycle.component';
import { NgmodelComponent } from './pages/home/subviews/ngmodel/ngmodel.component';
import { TemplateVariableComponent } from './pages/home/subviews/template-variable/template-variable.component'
import { FormComponent } from './pages/home/subviews/form/form.component';

import { ChildParentComponent } from './pages/home/subviews/child-parent/child-parent.component';
import { ChildComponent } from './pages/home/subviews/child-parent/child/child.component';
import { ParentComponent } from './pages/home/subviews/child-parent/parent/parent.component';
import { RouterJumpComponent } from './pages/home/subviews/router-jump/router-jump.component';
import { LinkGetComponent } from './pages/home/subviews/router-jump/subviews/link-get/link-get.component';
import { LinkDynamicComponent } from './pages/home/subviews/router-jump/subviews/link-dynamic/link-dynamic.component';
import { JsGetComponent } from './pages/home/subviews/router-jump/subviews/js-get/js-get.component';
import { JsDynamicComponent } from './pages/home/subviews/router-jump/subviews/js-dynamic/js-dynamic.component';
import { HttpRequestComponent } from './pages/home/subviews/http-request/http-request.component';
import { NotesComponent } from './pages/notes/notes.component';
import { MineComponent } from './pages/mine/mine.component';
import { FourzerofourComponent } from './pages/fourzerofour/fourzerofour.component';
import { TitleComponent } from './components/title/title.component';
import { NavigationComponent } from './components/navigation/navigation.component';


//自定义服务
import {CommonService} from './services/common/common.service'

//自定义指令
import { FontColorDirective } from './directives/fontColor/font-color.directive'

//自定义管道
import { HumpNamePipe } from './pipes/humpName/hump-name.pipe';

@NgModule({
  //组件、指令、管道
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
    TemplateVariableComponent,
    FormComponent,
  ],
  //模块
  imports: [
    BrowserModule,
    FormsModule,//数据双向绑定
    ReactiveFormsModule,//响应式表单
    AppModuleRouter,//路由
    HttpClientModule,//http请求
    HttpClientJsonpModule//jsonp请求

  ],
  //服务
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
