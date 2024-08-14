import { Component, Input } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';

@Component({
  selector: 'app-document-data-view',
  standalone: true,
  imports: [],
  templateUrl: './document-data-view.component.html',
  styleUrl: './document-data-view.component.scss'
})
export class DocumentDataViewComponent {

  @Input() node !: DocumentNode;

}
