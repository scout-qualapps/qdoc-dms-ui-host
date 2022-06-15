import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRepositoryPropertiesModalComponent } from './edit-repository-properties-modal.component';

describe('EditRepositoryPropertiesModalComponent', () => {
  let component: EditRepositoryPropertiesModalComponent;
  let fixture: ComponentFixture<EditRepositoryPropertiesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRepositoryPropertiesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRepositoryPropertiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
