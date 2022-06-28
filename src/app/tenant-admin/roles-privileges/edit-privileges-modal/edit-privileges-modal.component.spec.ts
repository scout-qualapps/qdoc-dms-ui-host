import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrivilegesModalComponent } from './edit-privileges-modal.component';

describe('EditPrivilegesModalComponent', () => {
  let component: EditPrivilegesModalComponent;
  let fixture: ComponentFixture<EditPrivilegesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPrivilegesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrivilegesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
