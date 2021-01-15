import { Component, OnInit } from '@angular/core';
import { StarService } from 'src/app/services/star.service';

@Component({
  selector: 'app-star-list',
  templateUrl: './star-list.component.html',
  styleUrls: ['./star-list.component.css'],
})
export class StarListComponent implements OnInit {
  constructor(public starService: StarService) {}

  ngOnInit(): void {
    this.starService.getAllStars();
    console.log(this.starService.stars);
  }
}
