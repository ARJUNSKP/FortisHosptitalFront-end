import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private rout:Router){}

  ngOnInit(): void {
    if(!localStorage.getItem('admin')&&!localStorage.getItem('user')&&!localStorage.getItem('doctor')){
      this.rout.navigateByUrl("")
      alert("Please Login")
    }
  }

}
