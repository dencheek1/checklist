import { Injectable, signal } from '@angular/core';
import { DocumentNode } from '../../core/document-node';

@Injectable({
  providedIn: 'root',
})
export class PreviewService {
  constructor() {}

  readonly document = signal<DocumentNode>({} as DocumentNode);
  readonly selected = signal<DocumentNode[]>([]);

  addSelected(node: DocumentNode) {
    this.selected.set([...this.selected(), node]);
  }

  removeFromSelected(node: DocumentNode) {
    this.selected.set(this.selected().filter((e) => e != node));
  }

  clearSelected() {
    this.selected.set([]);
  }

  setSelected(nodeArray: DocumentNode[]) {
    this.selected.set(nodeArray);
  }

  setDocument(document: DocumentNode){
    this.document.set(document);
  }

  removeNode(node: DocumentNode) {
    let document = this.document();
    let parentNode = this.getParent(document, node);
    if (parentNode) {
      parentNode.children = parentNode.children.filter((n) => n != node);
      this.document.set(document);
    }
    console.log('can\'t find parent for: ')
    console.log(node)
  }

  removeNodes(nodes: DocumentNode[]){
     nodes.forEach(this.removeNode);
  }

  getParent(root: DocumentNode, node: DocumentNode): DocumentNode | null {
    if (root.children.includes(node)) {
      return root;
    } else if (root.children.length > 0) {
      console.log(root.children)
      return root.children.reduce(
        (acc: DocumentNode| null, child) => 
          {
            acc = acc ? acc: this.getParent(child, node);
            return acc;
          }, 
        null);
    }
    return null;
  }

}
