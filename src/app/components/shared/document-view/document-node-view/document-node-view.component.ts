import { Component, ComponentRef, Input } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentViewComponent } from "../document-view.component"; 
import { NgComponentOutlet } from '@angular/common';
import { DocumentColumnsViewComponent } from '../document-columns-view/document-columns-view.component';

@Component({
  selector: 'app-document-node-view',
  standalone: true,
  imports: [DocumentViewComponent,
    NgComponentOutlet,
  ],
  templateUrl: './document-node-view.component.html',
  styleUrl: './document-node-view.component.scss'
})
export class DocumentNodeViewComponent {

@Input() node !: DocumentNode;

  getComponent(type: string) {
    switch(type.toLowerCase()){
      case 'columns':{
        console.log('columns');
        return DocumentColumnsViewComponent;} 
        case 'box': return DocumentNodeViewComponent;
      default: return  DocumentNodeViewComponent;
    }
    
  }

}
