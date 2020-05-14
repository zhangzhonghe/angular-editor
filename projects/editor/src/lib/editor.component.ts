import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-editor',
  template: `
    <div #editor></div>
  `,
  styles: [
  ]
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
