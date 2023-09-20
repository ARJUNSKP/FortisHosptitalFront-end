import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctorviewuser',
  templateUrl: './doctorviewuser.component.html',
  styleUrls: ['./doctorviewuser.component.css']
})
export class DoctorviewuserComponent implements OnInit {

  dr_name:any
  dr_profileData:any
  constructor(private ds:DataService,private as:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.as.params.subscribe((Response:any)=>{
      this.dr_name=Response.dr_name
    })
    this.ds.drProfiledataviewApi(this.dr_name).subscribe((Response:any)=>{
      this.dr_profileData=Response
    })
  }

  opbooking(){
    this.router.navigateByUrl('opticketbooking/'+this.dr_name)
  }
}
