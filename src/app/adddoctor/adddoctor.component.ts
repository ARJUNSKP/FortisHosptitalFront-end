import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {

  userlogin:boolean=false
  adminLogin:boolean=false
  drlist:any
  constructor(private ds:DataService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  department1(event:any){
    // console.log(event.target.value);
    this.ds.departmentDoctorsApi(event.target.value).subscribe((Responce:any)=>{
      this.drlist=Responce.doctorname
    })
    if(localStorage.getItem('user')){
      this.userlogin=true
    }
    if(localStorage.getItem('admin')){
      this.adminLogin=true
    }
  }
}
