import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify'; 
import { Router } from '@angular/router';
import {MatTabChangeEvent} from '@angular/material/tabs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private _toastService: ToastService , private router:Router) { }
  
  eyes = {
    eye0 : true,
    eye1 : true,
    eye2 : true,
  }
  
  logIn = {
    name : "",
    pass : "",
  }
  register = {
    name : "",
    phone : "",
    pass : "",
    pass_re : "",
  }

  isEmpty(myDictionary:any):Boolean {
    for (let key in myDictionary) {
      let value = myDictionary[key];
      let textFa;
      switch (key) {
        case "name":    textFa="نام کاربری";         break;
        case "pass":    textFa="رمز عبور";           break;
        case "phone":   textFa="شماره موبایل";       break;
        case "pass_re": textFa="تکرار رمز عبور";     break;
      }
      if (value === "") {
        this._toastService.error(textFa + " خالیه که ! ")
        return false
      }
    }
    return true
  }
  isEmail(emailAdress:any){
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    if (emailAdress.match(regex)) {
      return true;
    }else{ 
      this._toastService.error("ایمیل مشکل داره که !")
      return false;
    } 
  }
  isPhome(Phone:string){
    if(Phone.length != 11 || Phone.slice(0 , 2) != "09"){
      this._toastService.error("شماره موبایل مشکل داره که !")
      return false
    }else {
      return true
    }
  }
  isPass_re(Pass:any , Pass_re:any):boolean{
    if(Pass !== Pass_re){
      this._toastService.error("دوتا رمز عبور باید یکی باشع دیگه !")
      return false
    }
    return true
  }

  
  logIn_submit(){
    if (this.isEmpty(this.logIn) && this.isEmail(this.logIn.name)) {
      this.router.navigate(['/panel/dashboard']);
    }
    
  }
  register_submit(){
    if (this.isEmpty(this.register) && this.isEmail(this.register.name) && this.isPhome(this.register.phone) && this.isPass_re(this.register.pass , this.register.pass_re)) {
      this.router.navigate(['/panel/dashboard']);
    }
  }


  selectedIndex: number = 0;
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }
  public nextStep() {
      this.selectedIndex += 1;
  }
}
