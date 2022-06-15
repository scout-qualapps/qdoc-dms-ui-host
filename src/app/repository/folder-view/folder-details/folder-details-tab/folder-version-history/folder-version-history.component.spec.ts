import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderVersionHistoryComponent } from './folder-version-history.component';

describe('FolderVersionHistoryComponent', () => {
  let component: FolderVersionHistoryComponent;
  let fixture: ComponentFixture<FolderVersionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderVersionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderVersionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
