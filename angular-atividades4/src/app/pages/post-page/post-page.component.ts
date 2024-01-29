import { Component, signal } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { PostRequest } from '../../api/post.request';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [CommonModule],
  providers: [PostRequest],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css',
})
export class PostPageComponent {
  readonly postSignal = signal<IPost | null>(null);

  constructor(private postRequest: PostRequest, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.postRequest.getPost(id).subscribe((data) => {
          this.postSignal.set(data);
        });
      }
    });
  }

  get post() {
    return this.postSignal();
  }
}
