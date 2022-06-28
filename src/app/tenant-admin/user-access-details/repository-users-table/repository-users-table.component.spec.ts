import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryUsersTableComponent } from './repository-users-table.component';

describe('RepositoryUsersTableComponent', () => {
  let component: RepositoryUsersTableComponent;
  let fixture: ComponentFixture<RepositoryUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryUsersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
