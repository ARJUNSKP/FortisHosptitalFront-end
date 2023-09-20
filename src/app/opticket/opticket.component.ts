import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../servise/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-opticket',
  templateUrl: './opticket.component.html',
  styleUrls: ['./opticket.component.css']
})
export class OpticketComponent implements OnInit{
  dr_name:any
  dr_profileData:any

  opbookingform=this.fb.group({
    pname:['',Validators.required],
    page:['',Validators.required],
    pgender:['',Validators.required],
    pdate:['',Validators.required],
    schedule:['',Validators.required]
  })
  constructor(private as:ActivatedRoute,private ds:DataService,private fb:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.as.params.subscribe((Response:any)=>{
      this.dr_name=Response.dr_name
    })
    this.ds.drProfiledataviewApi(this.dr_name).subscribe((Response:any)=>{
      this.dr_profileData=Response
    })
  }
  payMentbookop(){
    if(this.opbookingform.valid){
      var path=this.opbookingform.value
      var pname=path.pname
      var page=path.page
      var pgender=path.pgender
      var pdate=path.pdate
      var schedule=path.schedule
      
      this.ds.bookopApi(this.dr_name,pname,page,pgender,pdate,schedule).subscribe((Response:any)=>{
        if(Response){
          alert('Get Appointment')
          this.opbookingform.reset()
          this.router.navigateByUrl('home')
        }
      },
      Response=>{
        alert(Response.error)
      })
    }
    else{
      alert("Validation Error")
    }
  }
}
