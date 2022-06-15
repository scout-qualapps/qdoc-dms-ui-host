import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewTemplateComponent } from './card-view-template.component';

describe('CardViewTemplateComponent', () => {
  let component: CardViewTemplateComponent;
  let fixture: ComponentFixture<CardViewTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
