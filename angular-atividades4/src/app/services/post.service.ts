import { Injectable, signal } from "@angular/core";
import { IPost } from "../interfaces/post.interface";
import { PostRequest } from "../api/post.request";

@Injectable({ providedIn: "root"})
export class PostService{
    readonly postListSignal = signal<IPost[]>([]);

    constructor(private postRequest: PostRequest) {
        this.postRequest.getPostList().subscribe(data => {
            this.postListSignal.set(data);
        })
    }

    getPostList(){
        return this.postListSignal();
    }
}