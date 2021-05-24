import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: []
})
export class LoadingComponent implements OnInit {

  @Input() colspanDiv!: string
  constructor() { }

  ngOnInit() {
  }

}
