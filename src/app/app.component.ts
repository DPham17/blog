import {Component, Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent implements OnInit {
  // title = 'the website';
  // name = 'Dzu Pham';
  // profession = 'Programmer at Walmart';
  // education = 'Missouri S&T';
  // major = 'Computer Science';
  // location = 'Bentonville, Ar';
  name = 'Name';
  profession = 'Profession';
  education = 'Education';
  major = 'Major';
  location = 'Location';

  sites = [
    'https://www.bing.com//az/hprichbg/rb/BarHarborCave_EN-US8598700153_1920x1080.jpg',
    'https://www.bing.com/az/hprichbg/rb/MatusevichGlacier_EN-US13620113504_1920x1080.jpg'
  ];
  url = this.randomUrl(this.sites);

  changeBackground(): any {
    if (!this.url) {
      this.url = './assets/img/hero.jpg';
    }
    return { 'background-image': 'url(' + this.url + ')' };
  }

  constructor(private http: Http) {}

  ngOnInit() {

    // this.getBing()
    //   .subscribe(
    //     (response: Response) => {
    //       const data = response.json();
    //       console.log(response);
    //       return data;
    //     },
    //     (error) => { console.log(error); }
    //   );
  }

  // getBing() {
  //   const headers = new Headers();
  //   headers.append('Access-Control-Allow-Origin', '*');
  //   console.log(headers);
  //   return this.http.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', {headers: headers});
  // }

  randomUrl(sites) {
    const value = Math.floor(Math.random() * sites.length);
    return sites[value];
  }
}
