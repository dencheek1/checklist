import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTableViewComponent } from './document-table-view.component';

describe('DocumentTableViewComponent', () => {
  let component: DocumentTableViewComponent;
  let fixture: ComponentFixture<DocumentTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentTableViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
