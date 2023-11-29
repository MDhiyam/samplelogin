import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  submit = false;

  
  //Password Eye Icon

  visible:boolean = true;
  changetype:boolean = true;
  
  viewPass(){
    this.visible = false;
    this.changetype = false;
  }

  StudentArray : any[] = [];
  // name: string ="";
  // email: string = "";
  // password: string = "";

  signupObj:any = { 
    name : "" , 
    email : "" , 
    password : ""
  };

  constructor(private http: HttpClient) {

    //this.getAllEmployee();

  }

  onSubmit() {

    let bodyData = {
      "name" : this.signupObj.name,
      "email" : this.signupObj.email,
      "password" : this.signupObj.password
    };
    this.http.post("http://localhost:8000/student/create",bodyData).subscribe((resultData: any) =>
    {
      console.log(resultData);
      alert("registered successfully");

      this.signupObj.name = '';
      this.signupObj.email = '';
      this.signupObj.password = '';
      //this.getAllEmployee();
    });

  }

}
