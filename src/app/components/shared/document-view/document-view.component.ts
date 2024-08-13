import { Component } from '@angular/core';
import { DocumentNodeViewComponent } from "./document-node-view/document-node-view.component";

@Component({
  selector: 'app-document-view',
  standalone: true,
  imports: [DocumentNodeViewComponent],
  templateUrl: './document-view.component.html',
  styleUrl: './document-view.component.scss'
})
export class DocumentViewComponent {

  constructor(){}

  private document !: DocumentNode;




}
