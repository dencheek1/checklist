import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PreviewService } from '../../../service/preview/preview.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { Properties } from '../../../core/document-properties';
import { node_class, NodeClasses } from '../../../core/node-classes';
import { ALLOWED_CLASSES } from '../../../core/node-classes-for-type'

@Component({
  selector: 'app-document-edit-property-window',
  standalone: true,
  imports: [],
  templateUrl: './document-edit-property-window.component.html',
  styleUrl: './document-edit-property-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentEditPropertyWindowComponent {
  constructor() {
    toObservable(this.preview.selected).subscribe((selected) => {
      let selectedNode = selected[0]
      let classes = this.classes();
        if (selectedNode) {
          for (let key in NodeClasses) {
            // TODO look for better solutions 
            console.log( classes[ key ] )
            console.log( selectedNode )
            classes[ key ] = selectedNode.properties[ key ] || false;
          }

            this.allowedClasses.set( ALLOWED_CLASSES[selectedNode.type] );
        }
      this.classes.set(classes)
    });
  }

  protected preview = inject(PreviewService);
  classes = signal<node_class>({});
  allowedClasses = signal<node_class>({})

  getKeys(): string[]{
  return Object.keys(NodeClasses);
  }
}
