import { Component } from '@angular/core';
import { PostRequest } from '../../api/post.request';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [PostRequest, PostService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private postService: PostService) {}

  get postList(){
    return this.postService.getPostList();
  }

  redirectURL(id: number){
    return `/post/${id}`;
  }
}
