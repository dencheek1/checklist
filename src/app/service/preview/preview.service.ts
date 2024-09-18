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

  removeSelectedNodes() {
    let selected = this.selected();
    this.removeNodes(selected);
    this.clearSelected();
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

  setDocument(document: DocumentNode) {
    this.document.set(document);
  }

  removeNode(node: DocumentNode) {
    let document = this.document();
    // console.log(document);
    if (this.removeNodeDocument(document, node)) {
      // console.log(document);
      this.document.set(document);
    }
  }

  private removeNodeDocument(
    document: DocumentNode,
    node: DocumentNode
  ): boolean {
    let parentNode = this.getParent(document, node);
    if (parentNode) {
      parentNode.children = parentNode.children.filter((n) => n != node);
      return true;
    }
    return false;
  }

  removeNodes(nodes: DocumentNode[]) {
    console.log(nodes);
    let document = this.document();
    nodes.forEach((node) => this.removeNodeDocument(document, node));
    this.document.set(document);
  }

  getParent(root: DocumentNode, node: DocumentNode): DocumentNode | null {
    if (root.children.includes(node)) {
      return root;
    } else if (root.children.length > 0) {
      // console.log(root.children)
      return root.children.reduce((acc: DocumentNode | null, child) => {
        acc = acc ? acc : this.getParent(child, node);
        return acc;
      }, null);
    }
    return null;
  }

  addDocumentNode(node: DocumentNode) {
    // this.document.update( value => value.children.push(node))
    let copy = structuredClone(this.document());
    copy.children.push(node);
    this.document.set(copy);
    // console.log('added new node')
  }

  addAfterSelected(node: DocumentNode) {
    if (this.selected().length == 0) return;

    let document = this.document();
    let selected = this.selected()[0];
    if (selected.type == 'leaf') {
      let parent = this.getParent(document, selected);

      if (parent) {
        let index = parent.children.indexOf(selected);
        parent.children = [
          ...parent.children.slice(0, index + 1),
          node,
          ...parent.children.slice(index + 1),
        ];
      }
    }
    else{
      selected.children.push(node);
    }

    this.document.set(structuredClone(document));
  }
}
