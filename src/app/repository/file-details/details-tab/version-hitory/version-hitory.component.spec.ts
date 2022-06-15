import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionHitoryComponent } from './version-hitory.component';

describe('VersionHitoryComponent', () => {
  let component: VersionHitoryComponent;
  let fixture: ComponentFixture<VersionHitoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionHitoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionHitoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
