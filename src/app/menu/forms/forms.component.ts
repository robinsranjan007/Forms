import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
 
})
export class FormsComponent implements OnInit {

  constructor() { }

  reactiveForm!:FormGroup;

  ngOnInit(): void {
  
    this.reactiveForm = new FormGroup({
      
      firstName: new FormControl('Robins'),
      lastName: new FormControl('Ranjan'),
      email: new FormControl('robinsranjan@gmail.com'),
      userName: new FormControl('robinsranjan'),
      dob: new FormControl('05/04/2000'),
      gender: new FormControl('Male'),
      street: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null),
      Postal: new FormControl(null),
      country: new FormControl(null)
    })


  }

   

  
  
}
