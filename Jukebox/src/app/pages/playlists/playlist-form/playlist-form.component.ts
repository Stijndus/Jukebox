import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss']
})
export class PlaylistFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private apiSrvc: ApiService
  ) {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      image: [null]
    })
  }
  ngOnInit() { }

  uploadFile(event: any) {
    console.log(event);
    const file = event.target.files[0].name;
    this.form.patchValue({
      image: file
    });
    this.form.get('image')?.updateValueAndValidity()
  }
  
  submitForm() {
    var formData: any = new FormData();
    formData.append("title", this.form.get('title')?.value);
    formData.append("description", this.form.get('description')?.value);
    formData.append("image", this.form.get('image')?.value);
    this.apiSrvc.addPlaylist(formData).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error)
    )
  }
}
