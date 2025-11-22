import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [FormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
})
export class Loginpage {
username:string='';
password:string='';
remember:boolean=false;
router=inject(Router);
message:string='';
check(){
  if (this.username=='admin' && this.password=='admin') {
     this.router.navigateByUrl('/privatetemplate');
  } else {
    this.message='نام کاربری یا کلمه عبور صحیح نمیباشد!';

  }
}
}
