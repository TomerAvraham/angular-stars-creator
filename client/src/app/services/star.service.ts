import { Injectable } from '@angular/core';
import { GalaxyInterFace } from '../interfaces/galaxy';
import { StarInterFace } from '../interfaces/star';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  public galaxies: GalaxyInterFace[] = [];

  public stars: StarInterFace[] = [];

  constructor(private serverService: ServerService) {}

  setAllGalaxies() {
    this.serverService.getAllGalaxy().subscribe((res: any) => {
      this.galaxies = res.galaxies;
    }),
      (err) => {
        throw err;
      };
  }

  getAllStars() {
    this.serverService.getAllStars().subscribe((res: any) => {
      this.stars = res.stars;
    }),
      (err) => {
        console.error(err);
      };
  }

  addStar(star: any) {
    this.serverService.addStar(star).subscribe((res: any) => {
      console.log(res);
      this.stars.push(res.newStar);
    }),
      (err) => {
        console.log(err);
      };
  }
}
