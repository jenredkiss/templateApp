import { Component, OnInit, ElementRef } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor(private _elRef: ElementRef) { }

  ngOnInit() {
    jQuery(this._elRef.nativeElement).find('.parallax').parallax();
  }

}
