import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent],
  imports: [
    HttpModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    PostService,
    AppErrorHandler,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
