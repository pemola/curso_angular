import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="container alto">
    <div class="row">
      <div class="col">
      <app-binding></app-binding>
      <p></p>
      </div>
    </div>
    <div>
      <div class="row mt-4">
        <div class="col-6">
          <app-expresiones></app-expresiones>
          <p></p>
        </div>
    </div>
    <div class="row mt-4">
    <div class="col">
    <app-local></app-local>
    <p></p>
    </div>
  </div>
  </div>
  `,
  styles: [
    'div {color: red}'
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
