import { Component } from '@angular/core';
import { PostRequest } from '../../api/post.request';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  providers: [PostRequest, PostService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private postService: PostService) {}

  get postList(){
    return this.postService.getPostList();
  }
}
