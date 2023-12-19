import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{

  AddedData :any=  [];
  data : any ;

  constructor ( private fb : FormBuilder){
    this.AddedData = this.fb.group({
      firstname : [''],
      lastname : ['']
    })
  };

  ngOnInit(): void {
    // console.log(this.AddedData);
  }
  onSubmit(){
    // console.log(this.AddedData.value);
    this.data = this.AddedData.value;
  };
}
