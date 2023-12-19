import { Component } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  title : string = 'eshoppping Cart';
  slogan : string = 'Your Online website in Ongole';
  display : boolean = false;


  onClick(){
    this.display = true;
  };
}
