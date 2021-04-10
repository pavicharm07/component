import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
user = new User();
message='';
  constructor(private service : RegistrationService, private route : Router) { }

  ngOnInit() {
  }

  registerUser(){
    this.service.registerUserFromremote(this.user).subscribe(
      data=>{
       //this.route.navigate(['/loginsuccess'])
          console.log("response received");
          this.message="Registration successfull";
      },
      error=> 
      {
        console.log("exception occured");
        this.message="error.error"
      }
    
    )
      }
}
