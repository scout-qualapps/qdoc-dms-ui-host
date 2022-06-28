import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesListViewComponent } from './templates-list-view.component';

describe('TemplatesListViewComponent', () => {
  let component: TemplatesListViewComponent;
  let fixture: ComponentFixture<TemplatesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
