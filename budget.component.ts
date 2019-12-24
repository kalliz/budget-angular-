import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  description:string;
  value:number;
  operator:any;
  descrip:string;
  val:number;
  datatable:any[]=[{descrip:null,val:null}];
  datatable2:any[]=[{descrip2:null,val2:null}];
 incomevalue:number=0;
 globalindex:any;
 income:number;
 descrip2:string;
 val2:number;
 expense:number;
 total:number;

constructor() { }

ngOnInit() {
  }

 add()
 {
   this.Addition();
   this.subtraction();

  }

Addition(){

  if(this.value>0 && this.description!=null)
   {
    
    this.datatable.push({descrip:this.description,val:this.value});
  this.income=0;
  for(var n=0;n<this.datatable.length;n++)
   {
  this.income+=Number(this.datatable[n].val);
  }
 // this.total=this.income;
  return this.income;
 
 }
}
 
 subtraction()
 {
   if(this.value<0)
 {
   this.datatable2.push({descrip2:this.description,val2:this.value});
  this.expense=0;
for(var n=0;n<this.datatable2.length;n++)
{
this.expense+=Number(this.datatable2[n].val2);
}
this.total=this.income+this.expense;
return this.expense;
 }
 }
}
