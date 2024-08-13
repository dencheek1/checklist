import { TestBed } from '@angular/core/testing';

import { ChecklistDocumentService } from './checklist-document.service';

describe('ChecklistDocumentService', () => {
  let service: ChecklistDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecklistDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
