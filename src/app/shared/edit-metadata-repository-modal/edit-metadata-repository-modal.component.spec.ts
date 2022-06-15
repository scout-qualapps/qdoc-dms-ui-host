import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMetadataRepositoryModalComponent } from './edit-metadata-repository-modal.component';

describe('EditMetadataRepositoryModalComponent', () => {
  let component: EditMetadataRepositoryModalComponent;
  let fixture: ComponentFixture<EditMetadataRepositoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMetadataRepositoryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMetadataRepositoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
