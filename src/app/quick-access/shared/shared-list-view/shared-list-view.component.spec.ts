import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedListViewComponent } from './shared-list-view.component';

describe('SharedListViewComponent', () => {
  let component: SharedListViewComponent;
  let fixture: ComponentFixture<SharedListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
