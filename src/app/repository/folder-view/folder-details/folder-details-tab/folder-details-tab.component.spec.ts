import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderDetailsTabComponent } from './folder-details-tab.component';

describe('FolderDetailsTabComponent', () => {
  let component: FolderDetailsTabComponent;
  let fixture: ComponentFixture<FolderDetailsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderDetailsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderDetailsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
