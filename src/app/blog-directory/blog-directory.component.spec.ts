import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDirectoryComponent } from './blog-directory.component';

describe('BlogDirectoryComponent', () => {
  let component: BlogDirectoryComponent;
  let fixture: ComponentFixture<BlogDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDirectoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
