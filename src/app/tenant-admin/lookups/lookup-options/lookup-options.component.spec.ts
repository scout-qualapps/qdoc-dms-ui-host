import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupOptionsComponent } from './lookup-options.component';

describe('LookupOptionsComponent', () => {
  let component: LookupOptionsComponent;
  let fixture: ComponentFixture<LookupOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
