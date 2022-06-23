import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccessDetailsComponent } from './user-access-details.component';

describe('UserAccessDetailsComponent', () => {
  let component: UserAccessDetailsComponent;
  let fixture: ComponentFixture<UserAccessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccessDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
