import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogTemplateComponent } from './modal-dialog-template.component';

describe('ModalDialogTemplateComponent', () => {
  let component: ModalDialogTemplateComponent;
  let fixture: ComponentFixture<ModalDialogTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDialogTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDialogTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
