import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDetailsModalComponent } from './edit-user-details-modal.component';

describe('EditUserDetailsModalComponent', () => {
  let component: EditUserDetailsModalComponent;
  let fixture: ComponentFixture<EditUserDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserDetailsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
