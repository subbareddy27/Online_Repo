import { Component } from '@angular/core';

@Component({
  selector: 'ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  Available : boolean = true;

  products = [
    {id : 1 , name : 'Digital Car' , price : '109 $' , color : 'Blue' , available : 'Available' , image : 'assets/Project-Img/img (1).jpg'},
    {id : 2 , name : 'Car' , price : '105 $' , color : 'Black' , available : 'Available' , image : 'assets/Project-Img/img (2).jpg'},
    {id : 3 , name : 'lg Car' , price : '125 $' , color : 'Green' , available : 'Not Available' , image : 'assets/Project-Img/img (3).jpg'},
    {id : 4 , name : 'Bulde' , price : '50 $' , color : 'White' , available : 'Not Available' , image : 'assets/Project-Img/img (4).jpg'},
    {id : 5 , name : 'Animals' , price : '125$' , color : 'Green' , available : 'Available' , image : 'assets/Project-Img/img (5).jpg'},
    {id : 6 , name : 'Tree' , price : '109' , color : 'Gray' , available : 'Available' , image : 'assets/Project-Img/img (6).jpg'},
   {id : 7 , name : 'Digital Car' , price : '109 $' , color : 'Blue' , available : 'Available' , image : 'assets/Project-Img/img (7).jpg'},
    {id : 8 , name : 'Car' , price : '105 $' , color : 'Black' , available : 'Available' , image : 'assets/Project-Img/img (8).jpg'},
    {id : 9 , name : 'lg Car' , price : '125 $' , color : 'Green' , available : 'Not Available' , image : 'assets/Project-Img/img (9).jpg'},
    {id : 10 , name : 'Bulde' , price : '50 $' , color : 'White' , available : 'Not Available' , image : 'assets/Project-Img/img (10).jpg'},
    {id : 11 , name : 'Animals' , price : '125$' , color : 'Green' , available : 'Available' , image : 'assets/Project-Img/img (11).jpg'},
    {id : 12 , name : 'Tree' , price : '109' , color : 'Gray' , available : 'Available' , image : 'assets/Project-Img/img (12).jpg'},
  ]

}
