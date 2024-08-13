import { Component, Input, OnInit } from '@angular/core';
import { DocumentNode } from '../../../core/document-node';
import { DocumentNodeViewComponent } from './document-node-view/document-node-view.component'; 

@Component({
  selector: 'app-document-view',
  standalone: true,
  imports: [DocumentNodeViewComponent],
  templateUrl: './document-view.component.html',
  styleUrl: './document-view.component.scss',
  
})
export class DocumentViewComponent implements OnInit {
  constructor() {}

  @Input() document!: DocumentNode;

  ngOnInit(): void {
    console.log(document);
  }
}
