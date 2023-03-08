import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {PostManagementServiceService} from '../services/post-management-service.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  discription:string|undefined;
  image = new FormData();
  url:string|undefined = "https://res.cloudinary.com/dzmqstses/image/upload/v1671766702/this%20folder/swbcutmiczsin2vaglh9.jpg"
  postImage(event:any){
    let reader = new FileReader()
    const value = event.target.files
    this.image?.append('image',value[0],"image")
    // this.image.append('name','image')
    // this.image.append('size','1')
    reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      console.log(value)
  }
  submitPost(){
    // let boundary = '------WebKitFormBoundary' + Math.random().toString(36).substring(2)
   
    console.log(this.image)
    if(this.discription != undefined){
      this.image.append("discription",this.discription)
      this.service.setPost(this.image,this.discription).subscribe((data)=>{
        console.log(data)
        this.router.navigate(['profile'])
      })
    }
    
  }
  constructor(private service:PostManagementServiceService,private router:Router){}
}
