import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveCopyModalComponent } from './move-copy-modal.component';

describe('MoveCopyComponent', () => {
  let component: MoveCopyModalComponent;
  let fixture: ComponentFixture<MoveCopyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveCopyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveCopyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
