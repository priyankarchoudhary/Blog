import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {Routes,RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {WidgetListService} from "./widget-list.service";
import { BlogComponent } from './components/blog/blog.component';
import { AllBlogsComponent } from './components/blog/all-blogs/all-blogs.component';
import { AddBlogComponent } from './components/blog/add-blog/add-blog.component';
import { FavoriteBlogsComponent } from './components/blog/favorite-blogs/favorite-blogs.component';
import {DataService} from "./data.service";

const approutes :Routes =  [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'allblogs', component:AllBlogsComponent},
  {path:'addblogs', component:AddBlogComponent},
  {path:'favblogs', component:FavoriteBlogsComponent},
  {path:'**', component:LoginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    AllBlogsComponent,
    AddBlogComponent,
    FavoriteBlogsComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule, RouterModule.forRoot(approutes)
  ],

  providers: [WidgetListService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
