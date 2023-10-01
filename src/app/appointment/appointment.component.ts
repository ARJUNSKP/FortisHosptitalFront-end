import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{

  dr_name:any=''
  AllAppointment:any=[]
  searchProduct:any=[]
  // status:boolean=false
  searchterm:any
  searchday:any=""
  date:any
  
  // notappointment:any
  constructor(private ds:DataService,private fb:FormBuilder,private datePipe:DatePipe,private route:Router){}

  ngOnInit(): void {
      this.date=new Date()
      this.searchday = this.datePipe.transform(this.date, 'yyyy/MM/dd');
      
      if(localStorage.getItem('doctorName')){
          this.dr_name=localStorage.getItem('doctorName')
      }
      this.ds.allappointmentApi(this.dr_name).subscribe((Responce:any)=>{
            this.AllAppointment=Responce
            console.log(this.AllAppointment);
            this.searchProduct=this.AllAppointment
      },
      Response=>{
        // this.notappointment=Response.error
        alert(Response.error)
        // this.status=true
      })
  }
  search(event:any){
    this.searchterm=event.target.value
  }

  searchDate(event:any){
     var day=event.target.value
    this.searchday = this.datePipe.transform(day, 'yyyy/MM/dd');
    console.log(this.searchday);
    console.log(typeof(this.searchday));
    
  }
}
