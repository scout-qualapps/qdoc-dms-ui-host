import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCardViewWithMeComponent } from './shared-card-view-with-me.component';

describe('SharedCardViewWithMeComponent', () => {
  let component: SharedCardViewWithMeComponent;
  let fixture: ComponentFixture<SharedCardViewWithMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedCardViewWithMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedCardViewWithMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
