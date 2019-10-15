import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//组件
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { HomeComponent } from './components/home/home.component';
//服务
import {HeroService} from './services/hero.service';
@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
