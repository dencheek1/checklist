import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDataViewComponent } from './document-data-view.component';

describe('DocumentDataViewComponent', () => {
  let component: DocumentDataViewComponent;
  let fixture: ComponentFixture<DocumentDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentDataViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
