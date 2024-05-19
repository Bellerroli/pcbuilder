import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  confirmError: boolean = false;
  error: string | undefined;
  success: string | undefined;

  signupForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
    rePassword: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}"),
    ])
  });

  constructor(private auth: AuthService, private router: Router, private userService: UserService) {
  }

  signup() {
    this.confirmPasswords();
    if (!this.signupForm.invalid && !this.confirmError) {
      this.auth.signup(this.signupForm.get('email')?.value, this.signupForm.get('password')?.value).then(cred => {
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
          this.success = "Successful registration!"
        }).catch(err => {
          this.error = "Sign up failed!"
        });

      }).catch(err => {
        console.error(err)
      })
    }
    this.resetForm(this.signupForm);

  }

  confirmPasswords() {
    this.confirmError = this.signupForm.controls['password']?.value !== this.signupForm.controls['rePassword']?.value;
  }

  resetForm(form: FormGroup) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      // @ts-ignore
      form.get(key).setErrors(null);
    });
  }
}
