import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface articleMap { 
  [id: number]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleManagerService {
  private articleStatus = new BehaviorSubject<articleMap>({});
  articleStatus$ = this.articleStatus.asObservable();

  addArticle(id: number) {
    this.articleStatus.next({...this.articleStatus.value, [id]: false})
  }
  updateStatus(id: number) {
    const curStatus = this.articleStatus.value[id]
    for (const key in this.articleStatus.value) {
      this.articleStatus.value[key] = false;
    }
    this.articleStatus.next({...this.articleStatus.value, [id]: !curStatus})
  }
  
}
