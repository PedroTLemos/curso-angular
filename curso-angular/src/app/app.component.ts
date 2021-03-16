import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pedro = {name: 'Pedro', isStudent: true, school: 'Flexpag'};
  tenorio = {name: 'Tenório', isStudent: true, school: 'Santa Maria'};
  lemos = {name: 'Lemos', isStudent: false};
  title: 'null';
}
