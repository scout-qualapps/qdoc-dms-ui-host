import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMetadataFieldModalComponent } from './new-metadata-field-modal.component';

describe('NewMetadataFieldModalComponent', () => {
  let component: NewMetadataFieldModalComponent;
  let fixture: ComponentFixture<NewMetadataFieldModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMetadataFieldModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMetadataFieldModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
