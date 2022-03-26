import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/Services/person.service';
import { Iperson } from 'src/models/iperson';
@Component({
  selector: 'app-persondashboards',
  templateUrl: './persondashboards.component.html',
  styleUrls: ['./persondashboards.component.scss'],
})
export class PersondashboardsComponent implements OnInit {
  PersonList: Iperson[] = [];
  person: Iperson = {
    id: '',
    name: '',
    email: '',
    dob: new Date(),
    country: '',
    avatar: '',
  };
  constructor(private PersonService: PersonService, private Router: Router) {}

  ngOnInit(): void {
    this.FetchPersons();
  }
  FetchPersons() {
    this.PersonService.getAllPersons().subscribe((Persons) => {
      this.PersonList = Persons;
      //console.log(this.PersonList);
    });
  }

  deleteperson(id: string) {
    if (window.confirm('are you sure ')) {
      this.PersonService.DeletePerson(id).subscribe((response) => {
        this.FetchPersons();
      });
    }
  }
  updatePerson(id: string) {
    this.Router.navigate(['/update', id]);
  }
}
