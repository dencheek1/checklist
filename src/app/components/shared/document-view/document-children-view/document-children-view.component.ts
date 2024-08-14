import { Component, Input, OnInit } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentDataViewComponent } from '../document-data-view/document-data-view.component';
import { DocumentNodeViewComponent } from '../document-node-view/document-node-view.component';

@Component({
  selector: 'app-document-children-view',
  standalone: true,
  imports: [DocumentDataViewComponent, DocumentNodeViewComponent],
  templateUrl: './document-children-view.component.html',
  styleUrl: './document-children-view.component.scss',
})
export class DocumentChildrenViewComponent implements OnInit {
  @Input() node!: DocumentNode;

  ngOnInit(): void {
    console.log(JSON.stringify(this.node));
    for( let child of this.node.childern){
      console.log(child.data);
    }
  }
}
