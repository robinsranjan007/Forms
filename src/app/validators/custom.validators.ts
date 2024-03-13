import { FormControl, ValidationErrors } from "@angular/forms";

export class Customvalidation{


 static validatenames(control:FormControl):ValidationErrors|null{
    if(control.value!=null && control.value.indexOf(' ')!=-1)
    {
      return {invalidname:true};
      
    }
    return null;

  }

 
}