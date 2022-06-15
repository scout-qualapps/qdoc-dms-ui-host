import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailsRightSidePanelComponent } from './repo-details-right-side-panel.component';

describe('RepoDetailsRightSidePanelComponent', () => {
  let component: RepoDetailsRightSidePanelComponent;
  let fixture: ComponentFixture<RepoDetailsRightSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoDetailsRightSidePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailsRightSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
