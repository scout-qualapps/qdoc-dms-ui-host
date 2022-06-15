import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderVewFileDetailsComponent } from './folder-vew-file-details.component';

describe('FolderVewFileDetailsComponent', () => {
  let component: FolderVewFileDetailsComponent;
  let fixture: ComponentFixture<FolderVewFileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderVewFileDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderVewFileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
