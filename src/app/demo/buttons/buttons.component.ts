import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <p>
    <button mat-button><mat-icon>home</mat-icon>Click me!</button>
    <mat-checkbox>Check me!</mat-checkbox>

    </p>
  `,
  styles: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
