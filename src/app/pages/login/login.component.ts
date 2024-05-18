import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  error: string = "";
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}")
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(private auth: AuthService, private router: Router) {
  }

  login() {
    this.auth.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl("/main").catch(err => {
        console.error(err)
      });
    }).catch(err => {
      console.error(err);
      this.error = "Wrong credentials!";
    })
    this.resetForm(this.loginForm);
  }

  resetForm(form: FormGroup) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      // @ts-ignore
      form.get(key).setErrors(null);
    });
  }
}
