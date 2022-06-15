import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderCardViewComponent } from './folder-card-view.component';

describe('FolderCardViewComponent', () => {
  let component: FolderCardViewComponent;
  let fixture: ComponentFixture<FolderCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
