
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: any[];
  constructor(http: HttpClient) {
    http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      // this.posts = response.json();
      this.posts = response;
      console.log(this.posts)
    });
  }

  ngOnInit(): void {

  }

}
