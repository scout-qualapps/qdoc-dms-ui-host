import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMetadataTemplateComponent } from './add-metadata-template.component';

describe('AddMetadataTemplateComponent', () => {
  let component: AddMetadataTemplateComponent;
  let fixture: ComponentFixture<AddMetadataTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMetadataTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMetadataTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
