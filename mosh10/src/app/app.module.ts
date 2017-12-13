import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArchiveComponent } from './archive/archive.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArchiveComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: HomePageComponent }]),
    RouterModule.forRoot([{ path: 'archive/:year/:month', component: ArchiveComponent }]),
    RouterModule.forRoot([{ path: '**', component: NotFoundComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
