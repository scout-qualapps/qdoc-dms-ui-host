import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesListViewComponent } from './favorites-list-view.component';

describe('FavoritesListViewComponent', () => {
  let component: FavoritesListViewComponent;
  let fixture: ComponentFixture<FavoritesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
