import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataTemplateDetailsComponent } from './metadata-template-details.component';

describe('MetadataTemplateDetailsComponent', () => {
  let component: MetadataTemplateDetailsComponent;
  let fixture: ComponentFixture<MetadataTemplateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadataTemplateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataTemplateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
