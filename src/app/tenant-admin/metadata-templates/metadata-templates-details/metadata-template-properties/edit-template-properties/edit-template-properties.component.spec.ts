import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTemplatePropertiesComponent } from './edit-template-properties.component';

describe('EditTemplatePropertiesComponent', () => {
  let component: EditTemplatePropertiesComponent;
  let fixture: ComponentFixture<EditTemplatePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTemplatePropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
