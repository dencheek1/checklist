import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-document-edit-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './document-edit-toolbar.component.html',
  styleUrl: './document-edit-toolbar.component.scss'
})
export class DocumentEditToolbarComponent {

  @Output('addNode') addNodeEmitter = new EventEmitter; 
  @Output('addBox') addBoxEmiter = new EventEmitter;
  @Output('addColumns') addColumnsEmitter = new EventEmitter;
  @Output('addCheckbox') addCheckboxEmitter = new EventEmitter;
  
  addNode(){
    this.addNodeEmitter.emit();
  }

  addBox(){
    this.addBoxEmiter.emit();
  }

  addColumns(){
    this.addColumnsEmitter.emit();
  }

  addCheckbox(){
    this.addCheckboxEmitter.emit();
  }
}
