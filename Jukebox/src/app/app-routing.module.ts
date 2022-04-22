import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistViewComponent } from './pages/playlists/playlist-view/playlist-view.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { SongsComponent } from './pages/songs/songs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'playlists/:id', component: PlaylistViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
