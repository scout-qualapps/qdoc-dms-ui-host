import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMetadataTemplateModalComponent } from './add-metadata-template-modal.component';

describe('AddMetadataTemplateModalComponent', () => {
  let component: AddMetadataTemplateModalComponent;
  let fixture: ComponentFixture<AddMetadataTemplateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMetadataTemplateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMetadataTemplateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
