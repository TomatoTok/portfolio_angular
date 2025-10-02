import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailerService {
  constructor(private Http: HttpClient) {}

  private url = 'https://www.tomasbascal.com/node/';
  //https://www.tomasbascal.com/

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  envioCorreo(mail: any): Promise<any> {
    const url = this.url + 'mailer-module';
    const result = this.Http.post<any>(url, mail);
    return firstValueFrom(result.pipe(catchError(this.handleError)));
  }
}
