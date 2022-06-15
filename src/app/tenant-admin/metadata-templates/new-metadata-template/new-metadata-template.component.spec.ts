import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMetadataTemplateComponent } from './new-metadata-template.component';

describe('NewMetadataTemplateComponent', () => {
  let component: NewMetadataTemplateComponent;
  let fixture: ComponentFixture<NewMetadataTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMetadataTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMetadataTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
