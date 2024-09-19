import { Component, input } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';

@Component({
  selector: 'app-document-checkbox-view',
  standalone: true,
  imports: [],
  templateUrl: './document-checkbox-view.component.html',
  styleUrl: './document-checkbox-view.component.scss'
})
export class DocumentCheckboxViewComponent {

  public node = input.required<DocumentNode>({});

}
