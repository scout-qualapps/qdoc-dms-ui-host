import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateUiComponent } from './empty-state-ui.component';

describe('EmtptStateUiComponent', () => {
  let component: EmptyStateUiComponent;
  let fixture: ComponentFixture<EmptyStateUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyStateUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyStateUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
