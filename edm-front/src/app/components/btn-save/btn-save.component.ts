import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-save',
  templateUrl: './btn-save.component.html',
  styleUrls: []
})
export class BtnSaveComponent implements OnInit {

  @Input() display!: string
  @Input() loading!: boolean
  @Input() disabled!: boolean

  constructor() { }

  ngOnInit() { }

}
