import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderUserAccessComponent } from './folder-user-access.component';

describe('FolderUserAccessComponent', () => {
  let component: FolderUserAccessComponent;
  let fixture: ComponentFixture<FolderUserAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderUserAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderUserAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
