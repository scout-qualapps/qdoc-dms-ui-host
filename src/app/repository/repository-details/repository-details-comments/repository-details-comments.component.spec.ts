import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailsCommentsComponent } from './repository-details-comments.component';

describe('RepoDetailsCommentsComponent', () => {
  let component: RepoDetailsCommentsComponent;
  let fixture: ComponentFixture<RepoDetailsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoDetailsCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
