import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient) {}

  getAllGalaxy() {
    return this.http.get('http://localhost:5000/galaxy/all');
  }

  getAllStars() {
    return this.http.get('http://localhost:5000/star/all');
  }

  addStar(star) {
    return this.http.post('http://localhost:5000/star/add', star);
  }
}
