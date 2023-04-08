import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private service:AdminServiceService){}
  ngOnInit(): void {
    // 

  }
 
}
