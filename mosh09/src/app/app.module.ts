import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FollowersService } from './services/followers.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { AppComponent } from './app.component';
import { MyFollowersComponent } from './my-followers/my-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFollowersComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
    FollowersService,
    AppErrorHandler,
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

