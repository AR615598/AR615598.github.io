import { Component, inject, ViewContainerRef, Input} from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import articles from '../assets/articles.json';
import { ArticleManagerService } from '../article-manager.service';

export interface articleList { 
  [id: number]: { id: number, article_name: string, tags: string, date: string, instance: BlogCardComponent}
}

@Component({
  selector: 'app-blog-card-container',
  imports: [],
  templateUrl: './blog-card-container.component.html',
  styleUrl: './blog-card-container.component.css'
})
export class BlogCardContainerComponent {

  articlesList: articleList = {}

  constructor(
    private ams: ArticleManagerService) { }

  private viewContainer = inject(ViewContainerRef);
  loadContent(item: any) {
    const temp = this.viewContainer.createComponent(BlogCardComponent);
    this.articlesList[item.id] = { ...item, instance: temp.instance };
    this.ams.addArticle(item.id);
    temp.instance.blogData = item
  }
  ngOnInit() {
    articles.forEach((item) => this.loadContent(item));
    
  }
  hideArticle(id: number, bool: boolean) {
    const curarticle = this.articlesList[id].instance;
    curarticle.toggleHiddenState(bool);
  }
  filter(exp: string) {
    for (const value of Object.values(this.articlesList)) {
      const nameMatches = value.article_name.toLowerCase().includes(exp.toLowerCase());
      const tagMatches = value.tags[0].toLowerCase().includes(exp.toLowerCase());

      if (!nameMatches && !tagMatches)
        this.hideArticle(value.id, true);
      else
        this.hideArticle(value.id, false);
    }

  }
}
