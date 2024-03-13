import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Customvalidation } from 'src/app/validators/custom.validators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor() {}

  reactiveForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Customvalidation.validatenames
      ]),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.email,
        Validators.required,
      ]),
      userName: new FormControl(null,Validators.required),
      dob: new FormControl('05/04/2000'),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        postal: new FormControl(null, [Validators.required]),
        country: new FormControl(null, [Validators.required]),
      }),
      skills: new FormArray([new FormControl(null, [Validators.required])]),
      experience: new FormArray([]),
    });
  }

  addskills() {
    this.skills['controls'].push(new FormControl(null, [Validators.required]));
  }

  addexperience() {
    const experienceform = new FormGroup({
      company: new FormControl(null, [Validators.required]),
      position: new FormControl(null, [Validators.required]),
      totalexperience: new FormControl(null, [Validators.required]),
    });

    this.experience['controls'].push(experienceform);
  }

  deleteskills(index: number) {

    this.skills['controls'].splice(index, 1);

  }

  submitted() {
    console.log(this.reactiveForm);
    alert(this.reactiveForm.value.firstName);
  }

  validation(val: string): any {
    return this.reactiveForm.get(val);
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  get experience(): FormArray {
    return this.reactiveForm.get('experience') as FormArray;
  }

  delexperience(val: number) {
    this.experience['controls'].splice(val, 1);
  }


  // custom validators

  cvalidate(control:FormControl):ValidationErrors|null{
    if(control.value!=null && control.value.indexOf(' ')!=-1)
    {
      return {invalidname:true};
      
    }
    return null;

  }


  username()
  {
    let username='';

    const fname= this.reactiveForm.get('firstName')?.value;
    const lname= this.reactiveForm.get('lastName')?.value;
    const dob = this.reactiveForm.get('dob')?.value;

    if(fname.length>3)
    {
      username+= fname.slice(0,3)
    }
    else{
      username+=fname;
    }
    if(lname.length>3)
    {
      username+= lname.slice(0,3)
    }
    else{
      username+=lname;
    }
    let datetime = new Date(dob)
    username+=datetime.getFullYear();
    username=username.toLocaleLowerCase();
    console.log(username);
     

    this.reactiveForm.get('userName')?.setValue(username)
     
  }

}
