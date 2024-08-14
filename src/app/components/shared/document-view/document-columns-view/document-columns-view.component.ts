import { Component, Input, OnInit } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentNodeViewComponent } from '../document-node-view/document-node-view.component';

@Component({
  selector: 'app-document-columns-view',
  standalone: true,
  imports: [DocumentNodeViewComponent],
  templateUrl: './document-columns-view.component.html',
  styleUrl: './document-columns-view.component.scss',
})
export class DocumentColumnsViewComponent {
  @Input() node!: DocumentNode;

  ngOnInit(): void {
    console.log(JSON.stringify(this.node));
  }
}
