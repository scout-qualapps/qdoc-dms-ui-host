import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileEditPropertiesModalComponent } from './file-edit-properties-modal.component';

describe('FileEditPropertiesModalComponent', () => {
  let component: FileEditPropertiesModalComponent;
  let fixture: ComponentFixture<FileEditPropertiesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileEditPropertiesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileEditPropertiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
