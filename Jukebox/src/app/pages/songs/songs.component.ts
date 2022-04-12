import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent {
  columnDefs: ColDef[] = [
    { field: 'id', sortable: true, filter: true, checkboxSelection: true },
    { field: 'title', sortable: true, filter: true },
    { field: 'artist', sortable: true, filter: true },
    { field: 'album', sortable: true, filter: true },
  ];

  rowData: Observable<any[]>;

  constructor(private apiSrvc: ApiService) {
    this.rowData = this.apiSrvc.getSongs();
  }
}
