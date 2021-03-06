import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly URL = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  getPlaylists(){
    return this.http.get<any[]>(`${this.URL}/playlists`);
  }

  getPlaylist(id: number){
    return this.http.get<any[]>(`${this.URL}/playlists/${id}`);
  }

  addPlaylist(data: any){
    return this.http.post(`${this.URL}/playlists`, data);
  }

  getSongs(){
    return this.http.get<any[]>(`${this.URL}/songs`);
  }

  getSong(id: number){
    return this.http.get<any[]>(`${this.URL}/songs/${id}`);
  }

  addSong(data: any){
    return this.http.post(`${this.URL}/songs`, data);
  }

  getSongsFromPlaylist(id:number){
    return this.http.get<any[]>(`${this.URL}/songs_playlist/${id}`);
  }

  deleteSongFromPlaylist(id:number){
    return this.http.delete<any>(`${this.URL}/songs_playlist/${id}`);
  }

  addSongToPlaylsit(data:any){
    return this.http.post(`${this.URL}/songs_playlist`, data);
  }
}
