import { Component, ComponentRef, Input } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentViewComponent } from '../document-view.component';
import { NgComponentOutlet } from '@angular/common';
import { DocumentColumnsViewComponent } from '../document-columns-view/document-columns-view.component';
import { DocumentDataViewComponent } from '../document-data-view/document-data-view.component';
import { DocumentChildrenViewComponent } from '../document-children-view/document-children-view.component';

@Component({
  selector: 'app-document-node-view',
  standalone: true,
  imports: [DocumentViewComponent, NgComponentOutlet],
  templateUrl: './document-node-view.component.html',
  styleUrl: './document-node-view.component.scss',
})
export class DocumentNodeViewComponent {
  @Input() node!: DocumentNode;

  getComponent(node: DocumentNode) {
    console.log(node);
    if (node && node.nodeType) {
      switch (node.nodeType.toLowerCase()) {
        case 'leaf':
          return DocumentDataViewComponent;
        // case 'columns':
        //   return DocumentColumnsViewComponent;
        default:
          return DocumentChildrenViewComponent;
      }
    }
    return null;
  }
}
