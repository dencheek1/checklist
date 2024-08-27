import { Component, forwardRef } from '@angular/core';
import { DocumentEditToolbarComponent } from './document-edit-toolbar/document-edit-toolbar.component';
import { DocumentEditPropertyWindowComponent } from './document-edit-property-window/document-edit-property-window.component';
import { DocumentViewComponent } from '../shared/document-view/document-view.component';
import { testJson } from '../../../assets/checklist';
import { DocumentNode } from '../../core/document-node';
import { HeaderComponent } from '../shared/header/header.component';

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
})
export class DocumentEditPageComponent {
  document = testJson as DocumentNode;
}
