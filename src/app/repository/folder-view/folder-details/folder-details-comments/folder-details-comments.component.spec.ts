import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderDetailsCommentsComponent } from './folder-details-comments.component';

describe('FolderDetailsCommentsComponent', () => {
  let component: FolderDetailsCommentsComponent;
  let fixture: ComponentFixture<FolderDetailsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderDetailsCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderDetailsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
