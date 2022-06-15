import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMetadataTemplateModalComponent } from './edit-metadata-template-modal.component';

describe('EditMetadataTemplateModalComponent', () => {
  let component: EditMetadataTemplateModalComponent;
  let fixture: ComponentFixture<EditMetadataTemplateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMetadataTemplateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMetadataTemplateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
