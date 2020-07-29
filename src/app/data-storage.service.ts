import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private postService: PostService, private http: HttpClient) {}

    storeData() {
        //Get list of object
        const listOfPosts: Post[] = this.postService.getPosts();

        //store list of objects in DB
        this.http.put('https://live-posts-3d1c4.firebaseio.com/posts.json',listOfPosts)
        .subscribe((res)=> {console.log(res)});

    }
    
    fetchData() {
        //get data from DB
        this.http.get('https://live-posts-3d1c4.firebaseio.com/posts.json')
        .pipe(
            tap((posts: Post[])=> {
                console.log(posts);
                this.postService.setPosts(posts);
            })
        ) 
        .subscribe();  
        //store the data in postService
    }
}