import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { first, take } from 'rxjs/operators';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ApiService],
})
export class HomeComponent {
  public playlists: any;

  constructor(private ApiSrvc: ApiService) {
    this.playlists = this.ApiSrvc.getPlaylists();
  }
}
