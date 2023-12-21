import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit  {


   alldata : any ;
   arrayData : any = [];
   changer : boolean= false;


  constructor(private fb : FormBuilder){};

  
  ngOnInit() {
    this.alldata = this.fb.group({

      firstname : [ , Validators.required],
      lastname : [ , Validators.required],
      email : [],
      CompanyAddress : [],

      Companywebsite : [],
      lastCompanyLogname : [],
      workinghours : [],
      workingday : [],

      workingbilling : [],
      workingtime : []
    });

  };

  _submitForm(){
  // console.log(this.alldata.value);
  // this.alldata = this.arrayData.value;
    this.arrayData.push(this.alldata.value);
    this.alldata.reset();
  };
  
  _OnCancal(){
    this.alldata.reset();
  }
  Ondelate(i : any){
      this.arrayData.splice(i , 1)
    };

    OnEdite(i : any){
      this.changer = true;
      this.alldata.patchValue(this.arrayData[i])
    }

    SaveData(){
      this.arrayData.splice(this.alldata);
      this.arrayData.push(this.alldata.value);
      this.alldata.reset();
      this.changer = false;
    }
 };



