import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashCardViewComponent } from './trash-card-view.component';

describe('TrashCardViewComponent', () => {
  let component: TrashCardViewComponent;
  let fixture: ComponentFixture<TrashCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
