import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
 UserName:string|undefined;

 signup(){
  console.log(this.UserName);
 }
}
