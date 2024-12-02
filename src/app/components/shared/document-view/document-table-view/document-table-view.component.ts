import { ChangeDetectionStrategy, Component, forwardRef, HostListener, inject, Input, OnInit } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentNodeViewComponent } from "../document-node-view/document-node-view.component";
import { PreviewService } from '../../../../service/preview/preview.service';

@Component({
  selector: 'app-document-table-view',
  standalone: true,
  imports: [forwardRef(() => DocumentNodeViewComponent)],
  templateUrl: './document-table-view.component.html',
  styleUrl: './document-table-view.component.scss',
  // changeDetection:ChangeDetectionStrategy.OnPush

})
export class DocumentTableViewComponent implements OnInit {

  @HostListener('keydown', ['$event'])
  editMode(event: KeyboardEvent){
    // if(event.)this.preview.toggleEditMode();
    console.log(event);
  }
  @Input() node!: DocumentNode;

  protected preview = inject(PreviewService);

  ngOnInit(): void {
    console.log("children array length: " + this.node.children.length)
  }
}
