import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/Services/person.service';
import { Iperson } from 'src/models/iperson';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.scss'],
})
export class UpdatedataComponent implements OnInit {
  public form!: FormGroup;
  person: Iperson = {} as Iperson;
  id: string;
  val: any;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public PersonService: PersonService
  ) {
    this.id = '';
  }

  ngOnInit(): void {
    let sub = this.route.params.subscribe((params) => {
      this.val = params['id'];
    });
    this.PersonService.getPersonByID(this.val).subscribe((data) => {
      this.person = data;
    });
  }

  update(id: string, person: Iperson) {
    this.PersonService.updatePerson(id, person).subscribe((data) => {});
    this.router.navigate(['/Personsdashboard']);
  }
}
