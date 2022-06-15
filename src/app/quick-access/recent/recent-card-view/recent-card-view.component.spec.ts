import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCardViewComponent } from './recent-card-view.component';

describe('RecentCardViewComponent', () => {
  let component: RecentCardViewComponent;
  let fixture: ComponentFixture<RecentCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
