import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPrivilegesDetailsComponent } from './roles-privileges-details.component';

describe('RolesPrivilegesDetailsComponent', () => {
  let component: RolesPrivilegesDetailsComponent;
  let fixture: ComponentFixture<RolesPrivilegesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesPrivilegesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesPrivilegesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
