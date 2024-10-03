import { Component, inject } from '@angular/core';
import { PreviewService } from '../../../service/preview/preview.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { Properties } from '../../../core/document-properties';
import { node_class, NodeClasses } from '../../../core/node-classes';

@Component({
  selector: 'app-document-edit-property-window',
  standalone: true,
  imports: [],
  templateUrl: './document-edit-property-window.component.html',
  styleUrl: './document-edit-property-window.component.scss',
})
export class DocumentEditPropertyWindowComponent {
  constructor() {
    toObservable(this.preview.selected).subscribe((selected) => {
      let selectedNode = selected[0]
        if (selectedNode) {
          for (let key in NodeClasses) {
            // TODO look for better solutions 
            console.log(typeof key as keyof node_class)
            this.classes[ key ] = selectedNode.properties[ key ] || false;
          }
        }
      
    });
  }

  protected preview = inject(PreviewService);
  classes: node_class = {};

  getKeys(): string[]{
  return Object.keys(NodeClasses);
  }
}
