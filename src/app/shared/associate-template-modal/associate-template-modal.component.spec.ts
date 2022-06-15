import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateTemplateModalComponent } from './associate-template-modal.component';

describe('AssociateTemplateModalComponent', () => {
  let component: AssociateTemplateModalComponent;
  let fixture: ComponentFixture<AssociateTemplateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateTemplateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateTemplateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
