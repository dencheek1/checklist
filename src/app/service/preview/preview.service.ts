import { Injectable, signal } from '@angular/core';
import { DocumentNode } from '../../core/document-node';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  constructor() { }

  readonly selected = signal<DocumentNode[]>([]);

  addSelected(node : DocumentNode){
    this.selected.set([...this.selected(), node]);
  }

  removeFromSelected(node : DocumentNode){
    this.selected.set(this.selected().filter( e => e != node));
  }

  clearSelected(){
    this.selected.set([]);
  }

  setSelected(nodeArray : DocumentNode[]){
    this.selected.set(nodeArray);
  }
}
