import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewTemplateComponent } from './list-view-template.component';

describe('ListViewTemplateComponent', () => {
  let component: ListViewTemplateComponent;
  let fixture: ComponentFixture<ListViewTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
