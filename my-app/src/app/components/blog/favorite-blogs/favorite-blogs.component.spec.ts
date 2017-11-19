import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBlogsComponent } from './favorite-blogs.component';

describe('FavoriteBlogsComponent', () => {
  let component: FavoriteBlogsComponent;
  let fixture: ComponentFixture<FavoriteBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
