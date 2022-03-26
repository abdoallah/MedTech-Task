import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iperson } from 'src/models/iperson';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'User-Agent': 'googlebot',
        //Authorization: 'my auth token',
      }),
    };
  }
  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Write error details in Generic error log

    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Error occured, please try again'));
  }
  AddPerson(newperson: Iperson): Observable<Iperson> {
    return this.httpClient
      .post<Iperson>(
        `${environment.APIURL}`,
        JSON.stringify(newperson),
        this.httpOption
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllPersons(): Observable<Iperson[]> {
    return this.httpClient
      .get<Iperson[]>(`${environment.APIURL}`)
      .pipe(retry(2), catchError(this.handleError));
  }
  getPersonByID(perID: number): Observable<Iperson> {
    return this.httpClient
      .get<Iperson>(`${environment.APIURL}/${perID}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  updatePerson(id: any, updatedperson: Iperson): Observable<Iperson> {
    return this.httpClient
      .patch<Iperson>(
        `${environment.APIURL}/${id}`,
        JSON.stringify(updatedperson),
        this.httpOption
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  DeletePerson(id: string): Observable<Iperson> {
    return this.httpClient
      .delete<Iperson>(`${environment.APIURL}/${id}`, this.httpOption)
      .pipe(retry(2), catchError(this.handleError));
  }
}
