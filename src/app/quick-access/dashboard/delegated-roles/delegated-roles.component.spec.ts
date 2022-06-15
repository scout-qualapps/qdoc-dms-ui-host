import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegatedRolesComponent } from './delegated-roles.component';

describe('DelegatedRolesComponent', () => {
  let component: DelegatedRolesComponent;
  let fixture: ComponentFixture<DelegatedRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegatedRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegatedRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
