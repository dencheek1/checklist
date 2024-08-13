import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNodeViewComponent } from './document-node-view.component';

describe('DocumentNodeViewComponent', () => {
  let component: DocumentNodeViewComponent;
  let fixture: ComponentFixture<DocumentNodeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentNodeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentNodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
