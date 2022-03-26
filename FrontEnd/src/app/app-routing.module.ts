import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

import { MainLayoutComponent } from './components/main-layout/main-layout.component';

import { AddpersonComponent } from './components/addperson/addperson.component';
import { PersonsComponent } from './components/persons/persons.component';
import { PersondashboardsComponent } from './components/persondashboards/persondashboards.component';
import { UpdatedataComponent } from './components/updatedata/updatedata.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
  
      { path: 'Persons', component: PersonsComponent },

      { path: 'addperson', component: AddpersonComponent },
      { path: 'Personsdashboard', component: PersondashboardsComponent },
      { path: 'update/:id', component: UpdatedataComponent },
    ],
  },
  { path: 'home', component: HomeComponent },

  { path: '**', component: NotFoundComponent },
  { path: 'addperson', component: AddpersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
