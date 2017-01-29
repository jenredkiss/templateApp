import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from './../../service/global/user.service';
declare var jQuery: any;

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  private username: String;
  private password: String;

  constructor(private _elRef: ElementRef, private userService: UserService) { }

  ngOnInit() {
    jQuery(this._elRef.nativeElement).find('.modal').modal({dismissible: false});
  }

  onSubmit() {
    this.userService.authenticate(this.username, this.password)
                    .subscribe(res => {
                      console.log('LOGIN', res);
                    },
                    err => {
                      console.log('LERROR', err);
                    });
  }

}
