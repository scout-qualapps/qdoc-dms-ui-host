import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashListViewComponent } from './trash-list-view.component';

describe('TrashListViewComponent', () => {
  let component: TrashListViewComponent;
  let fixture: ComponentFixture<TrashListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
