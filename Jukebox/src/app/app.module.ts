import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SongsComponent } from './pages/songs/songs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongsComponent,

  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AgGridModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
