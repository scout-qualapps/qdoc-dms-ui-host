import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRepositoryComponent } from './manage-repository.component';

describe('ManageRepositoryComponent', () => {
  let component: ManageRepositoryComponent;
  let fixture: ComponentFixture<ManageRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
