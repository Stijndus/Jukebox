import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent{
  rowData: Observable<any[]>;

  constructor(private apiSrvc: ApiService) {
    this.rowData = this.apiSrvc.getPlaylists();
  }
  columnDefs: ColDef[] = [
    { field: 'id', sortable: true, filter: true },
    { field: 'title', sortable: true, filter: true },
    { field: 'description', sortable: true, filter: true },
    { field: 'image', sortable: true, filter: true },
  ];
}
