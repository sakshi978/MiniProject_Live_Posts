import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
    listOfChanged = new Subject<Post[]>();
    listOfPosts: Post[] = [
        new Post(
        `World Ocean Day`,
        `An ocean is body of water that composes much of planet's hydroshere. On
        Earth, an ocean is one of the major conventional division of the World Ocean.
        These are, in descending order by area, the Pacific, Atlantic, Indian,
        Southern, and Arctic Oceans.`,
        `https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
        `test@test.com`,new Date()
        ),
    
        new Post(
          `Nature Wonder`,
          `Nature is British weekly scientific jouranl founded and based in London, England. As a
          multidisciplinary publication Nature features peer-reviwed research from a variety of
          academic disciplines, mainly in science, technology, and the natural sciences.`,
          `https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp`,
          `test@test.com`,new Date()
          ),
    
          new Post(
            `Cricket`,
            `Real cricket is here and here to stay! For the first time we bring to you hit cricket
            franchise and rich cricketing with real cricket.`,
            `https://soniyasinghal111.files.wordpress.com/2015/02/virat-kohlil.jpg`,
            `test@test.com`,new Date()
            ),
    
      ];

      getPosts() {
          return this.listOfPosts;
      }

      addPost(post: Post) {
          this.listOfPosts.unshift(post);
      }

      deletePost(index: number) {
          this.listOfPosts.splice(index,1);
      }

      updatePost(index: number, post:Post) {
          this.listOfPosts[index] = post;
      }

      getPost(index: number) {
          return this.listOfPosts[index];
      }

      setPosts(posts: Post[]) {
          this.listOfPosts = posts;
          this.listOfChanged.next(this.listOfPosts);
      }
}