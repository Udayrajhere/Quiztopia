import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
   selector: 'login',
   imports: [ReactiveFormsModule, CommonModule],
   templateUrl: './login.html',
   styleUrl: './login.css'
})
export class login {
   public quizLogin: any;
   public quizSignup: any;
   activeForm: 'signup' | 'login' = 'login';
   submitted: boolean | undefined;

   constructor(private fb: FormBuilder, private router: Router) { }
   ngOnInit() {

      this.quizLogin = this.fb.group({
         password: ['', [Validators.required,Validators.minLength(8)]],
         email: ['', [Validators.required, Validators.email]],
      });

      this.quizSignup = this.fb.group({
         name: ['', [Validators.required]],
         password: ['', [Validators.required,Validators.minLength(8)]],
         email: ['', [Validators.required, Validators.email]],
      });
   }
   toggleForm(form: 'signup' | 'login') {
      this.activeForm = form;

   }

   loginForm() {
      // console.log(this.quizLogin);
      // console.log(this.quizLogin.value);
      // let userInput = this.quizLogin.value;
      // alert(`${userInput.email} . My password is ${userInput.password}`)
      // this,this.router.navigate(['Home']);
      this.submitted= true;
    if (this.quizLogin.valid) {
      let existingUserList:any = localStorage.getItem('registeredInUser') || [];
      existingUserList = JSON.parse(existingUserList);

      const isCredentialValid = existingUserList.some((user: { email: any; password: any; }) => {
        return user.email === this.quizLogin.value.email && user.password === this.quizLogin.value.password 
      });
// find, foreach, map, filter - arr
      if (isCredentialValid) {
        const userData = {
          email:this.quizLogin.value.email,
          // phoneNumber:this.loginForm.value.phoneNumber,
          password:this.quizLogin.value.password
        };
        localStorage.setItem('loggedInUser',JSON.stringify(userData));
        alert('Login Successfully!!!')
        console.log('Login successful:',userData);
        this.router.navigate(['home']);
      } else {
        alert('Ohh dada! credential shi daal');
        
      }
    }

   }

   signupform(){
      // console.log(this.quizSignup);
      // if (this.quizSignup.valid){
      //   this.activeForm ='login'
      // }
      console.log(this.quizSignup);
      this.submitted = true;
      if (this.quizSignup.valid) {
         const userData = {
            email: this.quizSignup.value.email,
            name: this.quizSignup.value.name,
            password: this.quizSignup.value.password,
         }
         let existingUserList: any = localStorage.getItem('registeredInUser') || [];
         if (existingUserList?.length > 0) {
            existingUserList = JSON.parse(existingUserList).concat([userData]);
            localStorage.setItem('registeredInUser', JSON.stringify(existingUserList));
         } else {
            localStorage.setItem('registeredInUser', JSON.stringify([userData]));
         }

         console.log('Sign Up successful:', userData);
         this.activeForm = 'login';
      }
   }

   isPasswordValid() {
      return !this.quizLogin.get('password').valid;

   }
   isEmailValid() {
      return !this.quizLogin.get('email').valid;

   }
   isNameValid() {
      return !this.quizLogin.get('name').valid;
   }
   
   isNameValids() {
      return !this.quizSignup.get('name').valid;
   }
   isPasswordValids() {
      return !this.quizSignup.get('password').valid;

   }
   isEmailValids() {
      return !this.quizSignup.get('email').valid;

   }
   

}