import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StarService } from 'src/app/services/star.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    public formBuilder: FormBuilder,
    public starService: StarService
  ) {}

  starForm: FormGroup;

  name = new FormControl('');
  age = new FormControl(0);
  isAlive = new FormControl(false);
  galaxy = new FormControl('');

  ngOnInit(): void {
    this.starService.setAllGalaxies();

    this.starForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      isAlive: this.isAlive,
      galaxy: this.galaxy,
    });
  }

  handelSubmit() {
    this.starService.addStar(this.starForm.value);
  }
}
