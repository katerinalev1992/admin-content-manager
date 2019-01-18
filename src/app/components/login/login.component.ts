import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../services/user.service';
import User from '../../entities/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService]
})
export class LoginComponent implements OnInit {

  loginFormControl: FormGroup;

  constructor(private httpService: HttpService,
              private router: Router,
              public snackBar: MatSnackBar,
              private userService: UserService) {

    this.loginFormControl = new FormGroup(({
      loginControl: new FormControl('', [
        Validators.required
      ]),
      passwordControl: new FormControl('', [
        Validators.minLength(3)
      ]),
    }));

  }

  ngOnInit() {
  }

  login() {
    if (this.loginFormControl.status === 'VALID') {
      const name = this.loginFormControl.value.loginControl;
      const password = this.loginFormControl.value.passwordControl;
      this.httpService.getByNameAndPassword(name, password, 'user').subscribe(data => {
          if (data.data !== null) {
            if (data.data.role === 'admin') {
              const user: any = data.data;
              this.userService.setUser(new User(user.name, user.password, user.id));
              this.router.navigate(['content']);
            } else {
              this.snackBar.open('Try again', null, {duration: 500});
            }
          } else {
            this.snackBar.open('Try again', null, {duration: 500});
          }
        },
        error => {
          console.log('Error ', error);
        });
    }
  }

}

