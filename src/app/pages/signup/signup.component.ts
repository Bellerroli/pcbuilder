import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";
import {confirmPasswordValidator} from "../../confirm-password.validator";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
    rePassword: new FormControl(),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}"),
    ])
  });

  ngOnInit() {
    this.signupForm.validator = confirmPasswordValidator(this.signupForm.controls["password"].value, this.signupForm.controls["rePassword"].value);
  }

  constructor(private auth: AuthService, private router: Router, private userService: UserService) {
  }

  signup() {
    this.auth.signup(this.signupForm.get('email')?.value, this.signupForm.get('password')?.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl("/login").catch(err => {
        console.error(err)
      });
      const user: User = {
        id: ((cred.user?.uid as string) !== '') ? (cred.user?.uid as string) :
          (this.signupForm.get('email')?.value as string).split("@")[0],
        email: this.signupForm.get('email')?.value,
        username: this.signupForm.get('username')?.value
      }
      this.userService.create(user).then(() => {
        console.log("DONE")
      }).catch(err => {
        console.error(err)
      });

    }).catch(err => {
      console.error(err)
    })
  }
}
