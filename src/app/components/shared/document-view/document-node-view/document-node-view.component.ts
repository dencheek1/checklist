import { Component, ComponentRef, inject, Input, OnInit } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentViewComponent } from '../document-view.component';
import { DocumentTableViewComponent } from "../document-table-view/document-table-view.component";
import { PreviewService } from '../../../../service/preview/preview.service';

@Component({
  selector: 'app-document-node-view',
  standalone: true,
  imports: [DocumentViewComponent, DocumentTableViewComponent],
  templateUrl: './document-node-view.component.html',
  styleUrl: './document-node-view.component.scss',
})
export class DocumentNodeViewComponent implements OnInit{
  private prs = inject(PreviewService);
  @Input() node: DocumentNode = {} as DocumentNode;

  leafClass = this.node.properties; 
 ngOnInit(): void {
  this.leafClass = 
   console.log(this.leafClass);
 }
}
