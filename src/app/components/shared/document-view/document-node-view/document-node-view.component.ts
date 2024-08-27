import { Component, ComponentRef, Input, OnInit } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentViewComponent } from '../document-view.component';
import { DocumentTableViewComponent } from "../document-table-view/document-table-view.component";

@Component({
  selector: 'app-document-node-view',
  standalone: true,
  imports: [DocumentViewComponent, DocumentTableViewComponent],
  templateUrl: './document-node-view.component.html',
  styleUrl: './document-node-view.component.scss',
})
export class DocumentNodeViewComponent implements OnInit{
  @Input() node: DocumentNode = {} as DocumentNode;

  leafClass = this.node.properties; 
 ngOnInit(): void {
   console.log(this.leafClass);
 }
}
