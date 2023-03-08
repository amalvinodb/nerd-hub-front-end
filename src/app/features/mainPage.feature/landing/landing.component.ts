import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {LandingService}  from '../services/landing.service';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{

  panelOpenState = false;
  constructor(private router:Router,private service:LandingService){}
    allposts:any;
  ngOnInit(): void {

    this.service.getAllPosts().subscribe((data)=>{
      this.allposts = data

    })  
  }
  likePost(postId:string){
    this.service.likePost(postId).subscribe((data)=>{
      this.service.getAllPosts().subscribe((datas)=>{
        this.allposts = datas
   
       
      }) 
    })
  }
  comment(postId:string){
    console.log(postId,"comment")
  }
 
}
