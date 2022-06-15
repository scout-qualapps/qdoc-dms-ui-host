import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataTemplatePropertiesComponent } from './metadata-template-properties.component';

describe('MetadataTemplatePropertiesComponent', () => {
  let component: MetadataTemplatePropertiesComponent;
  let fixture: ComponentFixture<MetadataTemplatePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadataTemplatePropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataTemplatePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
