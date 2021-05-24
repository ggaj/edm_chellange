import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: []
})
export class AlertErrorComponent implements OnInit {

  @Input() visible!: boolean
  @Input() message!: string
  constructor() { }

  ngOnInit() {
  }

}
