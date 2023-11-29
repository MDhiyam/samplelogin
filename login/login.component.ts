import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //Password eye icon
  visible:boolean = true;
  changetype:boolean = true;

  viewPass(){
    this.visible = !this.visible
    this.changetype = !this.changetype
  }

  submit = false;


  // email: string = "";
  // password: string = "";

  loginObj:any = { 
    email : "" , 
    password : ""
  };

    
  isLogin: boolean = true;

  errorMessage: string = "";

  constructor(private router: Router, private http: HttpClient , private toastr:ToastrService) {

    //this.getAllEmployee();

  }


  onSubmit() {

    let bodyData = {
      "email" : this.loginObj.email,
      "password" : this.loginObj.password
    };
    this.http.post("http://localhost:8000/student/login",bodyData).subscribe((resultData: any) =>
    {
      console.log(resultData);
      
      if(resultData.status) {
        //this.router.navigateByUrl('/home');
        //alert('loged in!')
        this.toastr.success('User logged in Successfully');
      }
      else {
        //alert("Incorrect email or password");
        this.toastr.error('Incorrect email or password');
        console.log("error login");
      }
    });

}

}
