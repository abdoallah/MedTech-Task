import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/Services/person.service';
import { Iperson } from 'src/models/iperson';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.scss'],
})
export class AddpersonComponent implements OnInit {
  PersonList: Iperson = {} as Iperson;
  constructor(private PersonService: PersonService, private Router: Router) {}

  ngOnInit(): void {}
  AddPerson() {
    const observer = {
      next: (prs: Iperson) => {
        alert('Person added Successfuly');
        this.Router.navigateByUrl('/Persons');
      },
      error: (err: Error) => {
        alert(err.message);
      },
    };

    this.PersonService.AddPerson(this.PersonList).subscribe(observer);
  }
}
