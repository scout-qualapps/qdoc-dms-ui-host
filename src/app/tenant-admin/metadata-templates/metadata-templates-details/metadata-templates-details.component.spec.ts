import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataTemplatesDetailsComponent } from './metadata-templates-details.component';

describe('MetadataTemplatesDetailsComponent', () => {
  let component: MetadataTemplatesDetailsComponent;
  let fixture: ComponentFixture<MetadataTemplatesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadataTemplatesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataTemplatesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
