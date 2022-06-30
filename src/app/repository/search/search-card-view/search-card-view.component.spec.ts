import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardViewComponent } from './search-card-view.component';

describe('SearchCardViewComponent', () => {
  let component: SearchCardViewComponent;
  let fixture: ComponentFixture<SearchCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
