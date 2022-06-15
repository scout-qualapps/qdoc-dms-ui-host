import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedFilesModalComponent } from './related-files-modal.component';

describe('RelatedFilesModalComponent', () => {
  let component: RelatedFilesModalComponent;
  let fixture: ComponentFixture<RelatedFilesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedFilesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedFilesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
