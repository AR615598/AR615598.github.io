import { Component, ViewChild} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BlogCardContainerComponent } from '../blog-card-container/blog-card-container.component';


@Component({
  selector: 'app-blog-directory',
  imports: [ReactiveFormsModule, BlogCardContainerComponent],
  templateUrl: './blog-directory.component.html',
  styleUrl: './blog-directory.component.css'
})
export class BlogDirectoryComponent {
  search = new FormControl('');
  
  @ViewChild(BlogCardContainerComponent) child!: BlogCardContainerComponent;
  onKey(event: KeyboardEvent) {
    this.child.filter((event.target as HTMLInputElement).value);
  }
}
