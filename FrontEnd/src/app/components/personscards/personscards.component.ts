import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iperson } from 'src/models/iperson';

@Component({
  selector: 'app-personscards',
  templateUrl: './personscards.component.html',
  styleUrls: ['./personscards.component.scss'],
})
export class PersonscardsComponent implements OnInit {
  @Input() Person: Iperson = {
    id: '',
    name: ' ',
    email: ' ',
    dob: new Date(),
    country: '',
    avatar: ' ',
  };
  constructor(private Router: Router) {}

  ngOnInit(): void {}
  GetPersonDetails(id: string) {
    this.Router.navigate(['/update', id]);
  }
}
