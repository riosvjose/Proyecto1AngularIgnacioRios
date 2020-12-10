import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
@Input() HtmlComp = '';
  constructor() { }

  ngOnInit(): void {
  }

}
