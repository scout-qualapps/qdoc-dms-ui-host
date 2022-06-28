import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolesPrivilegesModalComponent } from './edit-roles-privileges-modal.component';

describe('EditRolesPrivilegesModalComponent', () => {
  let component: EditRolesPrivilegesModalComponent;
  let fixture: ComponentFixture<EditRolesPrivilegesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRolesPrivilegesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRolesPrivilegesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
