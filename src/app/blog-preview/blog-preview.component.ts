import { Component, OnInit } from '@angular/core';
import { BlogService } from '../article-service.service';

@Component({
  selector: 'app-blog-preview',
  imports: [],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.css'
})
export class BlogPreviewComponent  implements OnInit {
  art: any;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.currentArticle$.subscribe(c => {
      this.art = c;
    });
  }
}
