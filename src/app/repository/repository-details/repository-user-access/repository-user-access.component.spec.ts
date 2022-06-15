import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoUserAccessComponent } from './repo-user-access.component';

describe('RepoUserAccessComponent', () => {
  let component: RepoUserAccessComponent;
  let fixture: ComponentFixture<RepoUserAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoUserAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoUserAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
