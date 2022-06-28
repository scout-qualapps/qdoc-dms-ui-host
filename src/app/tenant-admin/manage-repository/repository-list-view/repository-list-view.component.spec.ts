import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryListViewComponent } from './repository-list-view.component';

describe('RepositoryListViewComponent', () => {
  let component: RepositoryListViewComponent;
  let fixture: ComponentFixture<RepositoryListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
