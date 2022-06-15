import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataTemplatesListComponent } from './metadata-templates-list.component';

describe('MetadataTemplatesListComponent', () => {
  let component: MetadataTemplatesListComponent;
  let fixture: ComponentFixture<MetadataTemplatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadataTemplatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataTemplatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
