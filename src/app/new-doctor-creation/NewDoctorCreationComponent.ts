import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../servise/data.service';

@Component({
  selector: 'app-new-doctor-creation',
  templateUrl: './new-doctor-creation.component.html',
  styleUrls: ['./new-doctor-creation.component.css'],
})
export class NewDoctorCreationComponent implements OnInit {
  constructor(
    private rout: Router,
    private fb: FormBuilder,
    private ds: DataService
  ) {}
  ngOnInit(): void {
    if (!localStorage.getItem('admin')) {
      this.rout.navigateByUrl('');
      alert('Please Login');
    }
  }
  newDoctorForm = this.fb.group({
    image: ['', Validators.required],
    dr_name: ['', Validators.required],
    department: ['', Validators.required],
    Education: ['', Validators.required],
    description: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  RegisterDocter() {
    if (this.newDoctorForm.valid) {
      var path = this.newDoctorForm.value;
      var dr_image = path.image;
      var dr_name = path.dr_name;
      var email = path.email;
      var psw = path.password;
      var department = path.department;
      var degree = path.Education;
      var description = path.description;

      this.ds.newDocterCreation(
        dr_image,
        dr_name,
        email,
        psw,
        department,
        degree,
        description
      ).subscribe;
    }
  }
}
