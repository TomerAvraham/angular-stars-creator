import { Component, Input, OnInit } from '@angular/core';
import { StarInterFace } from 'src/app/interfaces/star';
import { StarService } from 'src/app/services/star.service';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  constructor() {}

  @Input() star: StarInterFace;

  ngOnInit(): void {}
}
