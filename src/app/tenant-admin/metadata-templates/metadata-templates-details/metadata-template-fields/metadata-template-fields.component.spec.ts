import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataTemplateFieldsComponent } from './metadata-template-fields.component';

describe('MetadataTemplateFieldsComponent', () => {
  let component: MetadataTemplateFieldsComponent;
  let fixture: ComponentFixture<MetadataTemplateFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadataTemplateFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataTemplateFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
