import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { BlogService } from '../article-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viewer',
  imports: [RouterLink],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.css'
})
export class ViewerComponent implements OnInit {
  art: any;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.currentArticle$.subscribe(c => {
      this.art = c;
    });
  }
}

