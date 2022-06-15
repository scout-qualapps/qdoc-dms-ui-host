import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesCardViewComponent } from './favorites-card-view.component';

describe('FavoritesCardViewComponent', () => {
  let component: FavoritesCardViewComponent;
  let fixture: ComponentFixture<FavoritesCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
