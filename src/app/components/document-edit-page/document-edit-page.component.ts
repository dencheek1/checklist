import { ChangeDetectionStrategy, Component, forwardRef, inject } from '@angular/core';
import { DocumentEditToolbarComponent } from './document-edit-toolbar/document-edit-toolbar.component';
import { DocumentEditPropertyWindowComponent } from './document-edit-property-window/document-edit-property-window.component';
import { DocumentViewComponent } from '../shared/document-view/document-view.component';
import { testJson } from '../../../assets/checklist';
import { DocumentNode } from '../../core/document-node';
import { HeaderComponent } from '../shared/header/header.component';
import { PreviewService } from '../../service/preview/preview.service';

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
    // this.document.children.push({
    // children: [],
    // type: 'leaf',
    // properties: [],
    // data: 'Added new leaf node',
    // })
    this.preview.addDocumentNode({
      children: [],
      type: 'leaf',
      properties: [],
      data: 'Added new leaf node',
    });
  }

  addBox(){
    this.preview.addDocumentNode({
      children: [],
      type: 'leaf',
      properties: ['box'],
      data: 'Box leaf node'
    });
  }
}
