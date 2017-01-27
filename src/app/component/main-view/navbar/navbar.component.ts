import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _elRef: ElementRef) { }

  ngOnInit() {
    jQuery(this._elRef.nativeElement).find('.button-collapse').sideNav();
    jQuery(this._elRef.nativeElement).find('ul.tabs').tabs();
  }
}
