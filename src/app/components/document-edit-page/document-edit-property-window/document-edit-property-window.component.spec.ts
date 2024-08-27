import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEditPropertyWindowComponent } from './document-edit-property-window.component';

describe('DocumentEditPropertyWindowComponent', () => {
  let component: DocumentEditPropertyWindowComponent;
  let fixture: ComponentFixture<DocumentEditPropertyWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentEditPropertyWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentEditPropertyWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
