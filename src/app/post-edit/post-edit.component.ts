import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup;
  index: number;
  editMode = false;
  loggedInemail: string = 'test@test.com'; //test@test.com is used beacause empty string is not looking nice.

  constructor(
    private postService: PostService, 
    private routerService: Router, 
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      if(user) {
        this.loggedInemail = user.email;
      }
    });

    let title = '';
    let desc = '';
    let imagePath = '';

    //Get route parameters
    this.route.params.subscribe((params: Params) => {
      if(params['index']) {
        this.editMode = true;
        this.index = +params['index'];   //+ will convert string to int

        const post: Post = this.postService.getPost(this.index);
        title = post.title;
        desc = post.desc;
        imagePath = post.imagePath;

      }
      
    });

    //create form ref
    this.postForm = new FormGroup({
      title: new FormControl(title, Validators.required),
      desc: new FormControl(desc,[Validators.required, Validators.minLength(10)]),
      imagePath: new FormControl(imagePath,Validators.required)
    })
  }

  onSubmit() {
    let title = '';
    let desc =  '';
    let imagePath = '';

    //Fetch data from Form
    title = this.postForm.value.title;
    desc = this.postForm.value.desc;
    imagePath = this.postForm.value.imagePath;

    //New object
    const post: Post = new Post(
      title,
      desc,
      imagePath,
      this.loggedInemail,
      new Date()
    );

    
    if(this.editMode){
      //Edit post
      this.postService.updatePost(this.index,post);
    }
    else {
      //Add post
      this.postService.addPost(post);
    }

    //Redirect to home page
    this.routerService.navigate(['post-list']);
  }

  onCancel() {
    this.routerService.navigate(['post-list']);
  }

}
