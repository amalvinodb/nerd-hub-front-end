import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingService } from '../services/landing.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  panelOpenState = false;
  constructor(
    private router: Router,
    private service: LandingService,
    public dialog: MatDialog
  ) {}
  allposts: any;
  ngOnInit(): void {
    this.service.getAllPosts().subscribe((data) => {
      this.allposts = data;
    });
  }
  likePost(postId: string) {
    this.service.likePost(postId).subscribe((data) => {
      this.service.getAllPosts().subscribe((datas) => {
        this.allposts = datas;
      });
    });
  }
  openDialog(postId: string) {
    this.service.PostId = postId;
    const dialogRef = this.dialog.open(DialogBoxComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
