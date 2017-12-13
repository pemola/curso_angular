import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  @ViewChild('name') sLocal: any; // decorador aplicado sobre una variable, podría ser del tipo ElementRef

  constructor() { }

  ngOnInit() {
      console.log(this.sLocal);
  }

}
