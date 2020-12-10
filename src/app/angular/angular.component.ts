import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  @Input() AngularComp = '';
  constructor() { }

  ngOnInit(): void {
  }

}
