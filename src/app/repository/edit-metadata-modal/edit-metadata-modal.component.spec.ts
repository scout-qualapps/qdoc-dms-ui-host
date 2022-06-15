import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMetadataModalComponent } from './edit-metadata-modal.component';

describe('EditMetadataModalComponent', () => {
  let component: EditMetadataModalComponent;
  let fixture: ComponentFixture<EditMetadataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMetadataModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMetadataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
