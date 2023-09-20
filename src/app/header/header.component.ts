import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../servise/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  adddoctor:boolean=false
  userLogin:boolean=false
  doctorLogin:boolean=false
  doctorrealated:boolean=true

  dr_name:any=''
  drProfile:any=''

  doctorProfileform=this.fb.group({
    mfrom:['',Validators.required],
    mto:['',Validators.required],
    afrom:['',Validators.required],
    ato:['',Validators.required]
  })
  constructor(private rout:Router,private ds:DataService,private fb:FormBuilder){}
  ngOnInit(): void {
      if(localStorage.getItem('admin')){
        this.adddoctor=true
      }
      if(localStorage.getItem('user')){
        this.userLogin=true
      }
      if(localStorage.getItem('doctor')){
        this.doctorLogin=true
        this.doctorrealated=false
      }
      if(localStorage.getItem('doctorName')){
        this.dr_name=localStorage.getItem('doctorName')
      }
      this.ds.doctorProfileApi(this.dr_name).subscribe((Response)=>{
        this.drProfile=Response
      })
      
  }

  logout(){
    localStorage.clear()
    this.rout.navigateByUrl('')
  }
  setTime(){
    if(this.doctorProfileform.valid){
      var path=this.doctorProfileform.value
      var mfrom=path.mfrom
      var mto=path.mto
      var afrom=path.afrom
      var ato=path.ato
     

    }
  }
}
