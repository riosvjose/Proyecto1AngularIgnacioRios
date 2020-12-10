import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {
  @Input() JsComp = '';
  constructor() { }

  ngOnInit(): void {
  }

}
