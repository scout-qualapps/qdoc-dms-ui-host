import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewValueComponent } from './add-new-value.component';

describe('AddNewValueComponent', () => {
  let component: AddNewValueComponent;
  let fixture: ComponentFixture<AddNewValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
