import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEditToolbarComponent } from './document-edit-toolbar.component';

describe('DocumentEditToolbarComponent', () => {
  let component: DocumentEditToolbarComponent;
  let fixture: ComponentFixture<DocumentEditToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentEditToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentEditToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
