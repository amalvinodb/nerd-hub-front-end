import { Component, OnInit } from '@angular/core';
import { LandingService } from '../services/landing.service';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent implements OnInit {
  postData: any;
  comment:string|undefined;
  constructor(private service: LandingService) {}
  ngOnInit(): void {
    if (this.service.PostId != undefined) {
      this.service.getPost(this.service.PostId).subscribe((data) => {
        this.postData = data
      });
    }
  }
  makeComment(postId:string){
    const commentData={
      post:postId,
      comment:this.comment
    }
    if(this.comment!=undefined){
      this.service.makeComment(commentData).subscribe((data)=>{
        this.postData = data;
        this.comment = undefined
      })
    }
  }
}
