import { Component, OnInit } from '@angular/core';
import { DataService } from '../servise/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit{

  enquiryData:any=[]
  constructor(private ds:DataService,private route:Router){}

  ngOnInit(): void {
      if(!localStorage.getItem('admin')){
        this.route.navigateByUrl('')
        alert('please login')
      }
      this.ds.enquirylist().subscribe((Responce:any)=>{
        this.enquiryData=Responce
      })
  }
}
