import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SongsComponent } from './pages/songs/songs.component';
import { SongFormComponent } from './pages/songs/song-form/song-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { PlaylistFormComponent } from './pages/playlists/playlist-form/playlist-form.component';
import { PlaylistViewComponent } from './pages/playlists/playlist-view/playlist-view.component';
import { BtnCellRenderer } from './component/btn-cell-renderer/btn-cell-renderer.component';

@NgModule({
  imports: [
    BrowserModule,
    AgGridModule.withComponents([BtnCellRenderer]),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SongsComponent,
    SongFormComponent,
    PlaylistsComponent,
    PlaylistFormComponent,
    PlaylistViewComponent,
    BtnCellRenderer
  ],
  providers: [AgGridModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
