import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpClient],
})
export class AppComponent {
  title = 'Jukebox';
}
