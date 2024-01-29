import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPost } from "../interfaces/post.interface";

@Injectable({ providedIn: "root"})
export class PostRequest{
    BASE_URL = "http://localhost:3001"

    constructor(private http: HttpClient) {}

    getPostList(){
        return this.http.get<IPost[]>(`${this.BASE_URL}/news`)
    }

    getPost(id: string){
        return this.http.get<IPost>(`${this.BASE_URL}/news/${id}`);
    }
}