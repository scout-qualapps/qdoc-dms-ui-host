import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPrivilegesListViewComponent } from './roles-privileges-list-view.component';

describe('RolesPrivilegesListViewComponent', () => {
  let component: RolesPrivilegesListViewComponent;
  let fixture: ComponentFixture<RolesPrivilegesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesPrivilegesListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesPrivilegesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
