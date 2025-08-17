import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private currentArticle = new BehaviorSubject<any>(null);
  currentArticle$ = this.currentArticle.asObservable();

  setCurrentArticle(article: any) {
    this.currentArticle.next(article);
  }
}