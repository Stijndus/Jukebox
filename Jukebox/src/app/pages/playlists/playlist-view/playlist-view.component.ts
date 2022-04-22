import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { mergeMap, switchMap, tap } from 'rxjs/operators';
import { BtnCellRenderer } from 'src/app/component/btn-cell-renderer/btn-cell-renderer.component';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss'],
})
export class PlaylistViewComponent implements OnInit {
  public playlist$: any;
  public playlist: any;
  public songs$: any;
  public songsInPl$: any;
  form: FormGroup;
  columnDefs: ColDef[];
  frameworkComponents: { btnCellRenderer: typeof BtnCellRenderer };

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private apiSrvc: ApiService
  ) {
    this.form = this.fb.group({
      song: [''],
      playlist: [''],
    });

    this.columnDefs = [
      {
        headerName: '',
        field: 'relation_id',
        cellRenderer: 'btnCellRenderer',
        cellRendererParams: {
          clicked: function (field: any) {
              apiSrvc.deleteSongFromPlaylist(field).subscribe();
          },
        },
        width: 50,
      },
      { field: 'title', sortable: true, filter: true, width: 400 },
      { field: 'artist', sortable: true, filter: true, width: 400 },
      { field: 'album', sortable: true, filter: true, width: 300 },
    ];

    this.frameworkComponents = {
      btnCellRenderer: BtnCellRenderer,
    };
  }

  ngOnInit(): void {
    this.songs$ = this.apiSrvc.getSongs();
    this.playlist$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiSrvc.getPlaylist(parseInt(params.get('id')!))
      )
    );
    this.songsInPl$ = this.playlist$.pipe(
      tap((data: any) => (this.playlist = data)),
      switchMap((data: any) => {
        return this.apiSrvc.getSongsFromPlaylist(data.id);
      })
    );
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append('playlist', this.playlist?.id);
    formData.append('song', this.form.get('song')?.value);
    this.apiSrvc.addSongToPlaylsit(formData).subscribe(
      (response: any) => this.songsInPl$.subscribe(),
      (error: any) => console.log(error)
    );
  }
}
