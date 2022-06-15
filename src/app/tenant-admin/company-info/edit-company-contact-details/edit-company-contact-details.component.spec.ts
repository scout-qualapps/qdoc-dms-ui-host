import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompanyContactDetailsComponent } from './edit-company-contact-details.component';

describe('EditCompanyContactDetailsComponent', () => {
  let component: EditCompanyContactDetailsComponent;
  let fixture: ComponentFixture<EditCompanyContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompanyContactDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompanyContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
