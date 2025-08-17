import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { BlogDirectoryComponent } from '../blog-directory/blog-directory.component';
import { BlogPreviewComponent } from '../blog-preview/blog-preview.component';

@Component({
  selector: 'app-blog',
  imports: [BlogDirectoryComponent,BlogPreviewComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
