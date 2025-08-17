import { NONE_TYPE } from '@angular/compiler';
import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BlogService } from '../article-service.service';
import { ArticleManagerService } from '../article-manager.service';
import { NgClass } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-blog-card',
  imports: [RouterLink, NgClass],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent implements OnInit{
  @Input() blogData!: { id: number, article_name: string, tags: string, date: string, content: string };

  constructor(
    private blogService: BlogService,
    private ams: ArticleManagerService) { }
  
  isActive: boolean = false;
  isHidden: boolean = false;
  ngOnInit() {
    this.ams.articleStatus$.subscribe(c => {
      this.isActive = c[this.blogData.id] 
    })
  }
  openViewer() {
    this.blogService.setCurrentArticle(this.blogData);
  }

  toggleActiveState() {
    this.ams.updateStatus(this.blogData.id)
  }
  toggleHiddenState(bool: boolean) {
    this.isHidden = bool;
  }
}

