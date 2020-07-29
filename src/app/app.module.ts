import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: "" , redirectTo: "post-list", pathMatch: "full"},   //{path: "", component: PostListComponenet}
  { path: "auth" , component: AuthComponent },
  { path: "post-list" , component: PostListComponent },
  { path: "post-add" , component: PostEditComponent },
  { path: ":index/post-edit" , component: PostEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    PostComponent,
    PostEditComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
