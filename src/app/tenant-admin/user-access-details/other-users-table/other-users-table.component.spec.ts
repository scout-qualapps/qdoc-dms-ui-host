import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUsersTableComponent } from './other-users-table.component';

describe('OtherUsersTableComponent', () => {
  let component: OtherUsersTableComponent;
  let fixture: ComponentFixture<OtherUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherUsersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
