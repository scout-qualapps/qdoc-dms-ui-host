import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTemplateFieldsComponent } from './add-template-fields.component';

describe('AddTemplateFieldsComponent', () => {
  let component: AddTemplateFieldsComponent;
  let fixture: ComponentFixture<AddTemplateFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTemplateFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTemplateFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
