import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRepositoriesComponent } from './new-repositories.component';

describe('NewRepositoriesComponent', () => {
  let component: NewRepositoriesComponent;
  let fixture: ComponentFixture<NewRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRepositoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
