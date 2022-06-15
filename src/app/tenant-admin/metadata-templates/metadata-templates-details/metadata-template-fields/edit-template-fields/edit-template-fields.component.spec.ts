import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTemplateFieldsComponent } from './edit-template-fields.component';

describe('EditTemplateFieldsComponent', () => {
  let component: EditTemplateFieldsComponent;
  let fixture: ComponentFixture<EditTemplateFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTemplateFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTemplateFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
