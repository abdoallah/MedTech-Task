import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/Services/person.service';
import { Iperson } from 'src/models/iperson';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  PersonList: Iperson[] = [];
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

  // deleteproduct(pro: number) {
  //   if (window.confirm('are you sure ')) {
  //     this.prodService.deleteProduct(pro).subscribe((data) => {});
  //     this.prodService.getAllProducts().subscribe((Response) => {
  //       this.productlist = Response;
  //     });
  //   }
  // }
  // updateproduct(id: number) {
  //   this.router.navigate(['/update', id]);
  // }
}
