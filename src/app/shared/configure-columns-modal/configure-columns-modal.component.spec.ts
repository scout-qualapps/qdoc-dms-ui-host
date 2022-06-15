import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureColumnsModalComponent } from './configure-columns-modal.component';

describe('ConfigureColumnsModalComponent', () => {
  let component: ConfigureColumnsModalComponent;
  let fixture: ComponentFixture<ConfigureColumnsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureColumnsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureColumnsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
