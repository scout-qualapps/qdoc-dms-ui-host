import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderDetailRightSidePanelComponent } from './folder-detail-right-side-panel.component';

describe('FolderDetailRightSidePanelComponent', () => {
  let component: FolderDetailRightSidePanelComponent;
  let fixture: ComponentFixture<FolderDetailRightSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderDetailRightSidePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderDetailRightSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
