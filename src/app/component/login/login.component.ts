import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: String;
  private password: String;

  constructor(private _elRef: ElementRef) { }

  ngOnInit() {
    jQuery(this._elRef.nativeElement).find('.modal').modal({dismissible: false});
  }

  onSubmit() {
    
  }

}
