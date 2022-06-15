import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesOrderModalComponent } from './repositories-order-modal.component';

describe('RepositoriesOrderModalComponent', () => {
  let component: RepositoriesOrderModalComponent;
  let fixture: ComponentFixture<RepositoriesOrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoriesOrderModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
