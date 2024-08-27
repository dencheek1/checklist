import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentNodeViewComponent } from "../document-node-view/document-node-view.component";

@Component({
  selector: 'app-document-table-view',
  standalone: true,
  imports: [forwardRef(() => DocumentNodeViewComponent)],
  templateUrl: './document-table-view.component.html',
  styleUrl: './document-table-view.component.scss',

})
export class DocumentTableViewComponent implements OnInit {

  @Input() node!: DocumentNode;

  ngOnInit(): void {
    console.log(this.node)
  }
}