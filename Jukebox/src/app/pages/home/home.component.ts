import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { first, take } from 'rxjs/operators';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ApiService],
})
export class HomeComponent {
  public songs: any;
  public singleSong: any;

  constructor(private ApiSrvc: ApiService) {
    this.showSongs()
    this.showSong(1)

  }

  showSongs() {
    this.ApiSrvc.getSongs().subscribe({
      next: songs => {
        this.songs = songs;
        console.log(this.songs)
      },
    });
  }

  showSong(id: number) {
    this.ApiSrvc.getSong(id).subscribe({
      next: song => {
        this.singleSong = song;
        console.log(this.singleSong)
      },
    });
  }
  
}
