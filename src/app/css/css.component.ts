import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  @Input() CssComp = '';
  constructor() { }

  ngOnInit(): void {
  }

}
