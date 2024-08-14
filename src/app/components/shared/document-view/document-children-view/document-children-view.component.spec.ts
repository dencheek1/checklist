import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentChildrenViewComponent } from './document-children-view.component';

describe('DocumentChildrenViewComponent', () => {
  let component: DocumentChildrenViewComponent;
  let fixture: ComponentFixture<DocumentChildrenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentChildrenViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentChildrenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
