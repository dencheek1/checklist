import { Component, inject } from '@angular/core';
import { PreviewService } from '../../../service/preview/preview.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { Properties } from '../../../core/document-properties';

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
          for (let key in this.properties) {
            this.properties[key] = selectedNode.properties[key] || false;
          }
        }
        this.properties = { ...this.properties };
      
    });
  }

  protected preview = inject(PreviewService);
  properties: Properties = {
    bold: false,
    box: false,
    hover: false,
    italik: false,
    selected: false,
  };

  getKeys(): string[]{
    return Object.keys(this.properties);
  }
}
