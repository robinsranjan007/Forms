import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
 
})
export class FormsComponent implements OnInit {

  constructor() { }

  reactiveForm:FormGroup=new FormGroup({});

  ngOnInit(): void {
  
    this.reactiveForm = new FormGroup({
      
      firstName: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      lastName: new FormControl(null,Validators.required),
      email: new FormControl('robinsranjan@gmail.com',[Validators.email,Validators.required]),
      userName: new FormControl('robinsranjan'),
      dob: new FormControl('05/04/2000'),
      gender: new FormControl('male'),
      street: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null),
      postal: new FormControl(null),
      country: new FormControl(null)
    })

  }

   
submitted(){
  console.log(this.reactiveForm)
  alert(this.reactiveForm.value.firstName)
}
  
  
}
