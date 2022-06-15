import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleTemplateComponent } from './page-title-template.component';

describe('PageTitleTemplateComponent', () => {
  let component: PageTitleTemplateComponent;
  let fixture: ComponentFixture<PageTitleTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTitleTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
