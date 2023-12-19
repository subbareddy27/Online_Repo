import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  slogn : string = 'eShopping Markting Cart';

  _webSite : boolean= false;

  _slogan(){
    return 'This is a new slogna web Application ';
  }

  _siteLogin : string = 'assets/shopping.webp';
  logError : string = 'Website not Proper Respone Please !';
}
