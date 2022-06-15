import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderEditPropertiesModalComponent } from './folder-edit-properties-modal.component';

describe('FolderEditPropertiesModalComponent', () => {
  let component: FolderEditPropertiesModalComponent;
  let fixture: ComponentFixture<FolderEditPropertiesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderEditPropertiesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderEditPropertiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
