import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCardViewComponent } from './shared-card-view.component';

describe('SharedCardViewComponent', () => {
  let component: SharedCardViewComponent;
  let fixture: ComponentFixture<SharedCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
