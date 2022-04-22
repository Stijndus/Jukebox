import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent {
  form: FormGroup;
  constructor(public fb: FormBuilder, private ApiSrvc: ApiService) {
    this.form = this.fb.group({
      title: [''],
      album: [''],
      artist: ['']
    })
   }

   submitForm(){
     let formData: any =  new FormData();
     formData.append('title', this.form.get('title')?.value);
     formData.append('artist', this.form.get('artist')?.value);
     formData.append('album', this.form.get('album')?.value);

     this.ApiSrvc.addSong(formData).subscribe({
       next: (response)=> console.log(response),
       error: (error)=> console.log(error),
     })
   }
}
