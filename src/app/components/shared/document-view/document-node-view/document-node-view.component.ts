import { Component, ComponentRef, Input } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentViewComponent } from '../document-view.component';

@Component({
  selector: 'app-document-node-view',
  standalone: true,
  imports: [DocumentViewComponent],
  templateUrl: './document-node-view.component.html',
  styleUrl: './document-node-view.component.scss',
})
export class DocumentNodeViewComponent {
  @Input() node!: DocumentNode;

}
