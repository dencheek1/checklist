import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCheckboxViewComponent } from './document-checkbox-view.component';

describe('DocumentCheckboxViewComponent', () => {
  let component: DocumentCheckboxViewComponent;
  let fixture: ComponentFixture<DocumentCheckboxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentCheckboxViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentCheckboxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
