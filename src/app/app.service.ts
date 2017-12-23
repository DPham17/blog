// Import Injectable
import { Injectable } from '@angular/core';
// Import HTTP, Response and Headers
import { Http, Response, Headers } from '@angular/http';
// Import Obserables
// import { Observable } from 'rxjs';
// import 'rxjs/Rx';

@Injectable()
export class DbOperationsService {
  constructor(private http: Http) {}
  getBing() {
    const headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US', {headers: headers});
  }
}
