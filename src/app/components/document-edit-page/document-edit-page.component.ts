import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
} from '@angular/core';
import { DocumentEditToolbarComponent } from './document-edit-toolbar/document-edit-toolbar.component';
import { DocumentEditPropertyWindowComponent } from './document-edit-property-window/document-edit-property-window.component';
import { DocumentViewComponent } from '../shared/document-view/document-view.component';
import { testJson } from '../../../assets/checklist';
import { DocumentNode } from '../../core/document-node';
import { HeaderComponent } from '../shared/header/header.component';
import { PreviewService } from '../../service/preview/preview.service';
import { NodeType } from '../../core/node-types';

@Component({
  selector: 'app-document-edit-page',
  standalone: true,
  imports: [
    HeaderComponent,
    DocumentEditToolbarComponent,
    DocumentEditPropertyWindowComponent,
    forwardRef(() => DocumentViewComponent),
  ],
  templateUrl: './document-edit-page.component.html',
  styleUrl: './document-edit-page.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentEditPageComponent {
  document = testJson as DocumentNode;
  preview = inject(PreviewService);
  // TODO make this a thing
  /*
   * - [ ] make it a signal (maybe get it from other place)
   * - [ ] make it possible to select multiple nodes
   *
   */
  selectedNodes = [] as DocumentNode[];

  addNode() {
    let node = {
      children: [],
      type: NodeType.Leaf,
      properties: {},
      data: 'Added new leaf node',
    };
    this.selectMethod().call(this, node);
  }

  addBox() {
    let node: DocumentNode = {
      children: [],
      type: NodeType.Leaf,
      properties: { box: true },
      data: 'Box leaf node',
    };

    this.selectMethod().call(this, node);
  }

  addColumns() {
    let node = {
      children: [],
      type: NodeType.Columns,
      properties: {},
    };

    this.selectMethod().call(this, node);
  }

  addCheckbox() {
    let node = {
      children: [],
      type: NodeType.Checkbox,
      properties: {},
      data: 'Checkbox',
    };

    this.selectMethod().call(this, node);
  }

  selectMethod(): (node: DocumentNode) => void {
    let selected = this.preview.selected();
    if (selected.length == 1) {
      if (selected[0].type ==  NodeType.Leaf|| selected[0].type == NodeType.Checkbox) {
        return this.addAfterSelected;
      } else return this.addToSelected;
    }
    return this.addNodeToDocument;
  }

  addNodeToDocument(node: DocumentNode) {
    this.preview.addDocumentNode(node);
    this.preview.clearSelected();
  }

  addToSelected(node: DocumentNode) {
    this.preview.addToSelected(node);
    this.preview.clearSelected();
  }

  addAfterSelected(node: DocumentNode) {
    this.preview.addAfterSelected(node);
    this.preview.clearSelected();
  }
}
