import { Component } from '@angular/core';
import { Lib1Service } from 'lib1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site2';
  constructor(public lib1Service: Lib1Service) {}
}
