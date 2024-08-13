import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentColumnsViewComponent } from './document-columns-view.component';

describe('DocumentColumnsViewComponent', () => {
  let component: DocumentColumnsViewComponent;
  let fixture: ComponentFixture<DocumentColumnsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentColumnsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentColumnsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
