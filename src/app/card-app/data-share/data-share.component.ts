import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-share',
  templateUrl: './data-share.component.html',
  styleUrls: ['./data-share.component.css']
})
export class DataShareComponent implements OnInit {


  constructor(private fb : FormBuilder){}
  userProfile:any = 'assets/userprofile.png'
  formData : any;

  valueData : any = [];
display : boolean = true;
ngOnInit(): void {
  this.formData = this.fb.group({
    firstname : [],
    lastname : [],
    password : []
  });
}
  submitData(){
    // console.log(this.formData.value);
    this.valueData.push(this.formData.value);
    this.formData.reset();
  };
  CancalData(){
    this.formData.reset();
  };
  Ondelete(i : any){
    this.valueData.splice(i , 1);
  };

  OnEdite(i : any){
    this.display = false;
    this.formData.patchValue(this.valueData[i])
  };

  OnSave(){
    
    this.valueData.splice(this.formData);
    this.valueData.push(this.formData.value);
    this.formData.reset();
    this.display = true;
    // this.arrayData.push(this.alldata.value);

  };

};
