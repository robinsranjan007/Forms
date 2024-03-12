import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl,FormGroup, Validators} from '@angular/forms';


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
      address: new FormGroup({
        street: new FormControl(null,[Validators.required]),
        city: new FormControl(null,[Validators.required]),
        state: new FormControl(null,[Validators.required]),
        postal: new FormControl(null,[Validators.required]),
        country: new FormControl(null,[Validators.required])
      }),
      skills: new FormArray([
        new FormControl(null,[Validators.required]),
        
      ])


    })
   
  }

  addskills()
  {
    this.skills['controls'].push(new FormControl(null,[Validators.required]))
  } 


deleteskills(index:number)
{
  this.skills['controls'].splice(index,1)
}

submitted(){
  console.log(this.reactiveForm)
  alert(this.reactiveForm.value.firstName)
}
  

validation(val:string):any{
  return this.reactiveForm.get(val)
}

get skills():FormArray {
  return this.reactiveForm.get('skills') as FormArray;
}
  



}
