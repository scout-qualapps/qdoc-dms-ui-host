import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedListViewWithMeComponent } from './shared-list-view-with-me.component';

describe('SharedListViewWithMeComponent', () => {
  let component: SharedListViewWithMeComponent;
  let fixture: ComponentFixture<SharedListViewWithMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedListViewWithMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedListViewWithMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
