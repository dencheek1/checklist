import {
  Component,
  ComponentRef,
  ElementRef,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentViewComponent } from '../document-view.component';
import { DocumentTableViewComponent } from '../document-table-view/document-table-view.component';
import { PreviewService } from '../../../../service/preview/preview.service';

@Component({
  selector: 'app-document-node-view',
  standalone: true,
  imports: [DocumentViewComponent, DocumentTableViewComponent],
  templateUrl: './document-node-view.component.html',
  styleUrl: './document-node-view.component.scss',
})
export class DocumentNodeViewComponent implements OnInit {
  private prs = inject(PreviewService);
  @Input() node: DocumentNode = {} as DocumentNode;

  leafClass = this.node.properties;
  removeVisibilityLevel = 'visibility-0';

  ngOnInit(): void {
    console.log(this.leafClass);
  }

  hover(e: Event) {
    console.log((e.currentTarget as HTMLElement).getBoundingClientRect());
    console.log((e as MouseEvent).offsetX);
    e.stopPropagation();
    this.removeVisibilityLevel = 'visibility-1';

    let boundingRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    let mousePositionX = (e as MouseEvent).x;
    let ratio = (mousePositionX - boundingRect.x)/ boundingRect.width;

    console.log(ratio)
    
    if (ratio < 0.25 && e.bubbles) {
      this.removeVisibilityLevel = 'visibility-1';
    } else if (ratio < 0.5 && e.bubbles) {
      this.removeVisibilityLevel = 'visibility-1';
    } else if (ratio < 0.75 && e.bubbles){
      this.removeVisibilityLevel = 'visibility-2';
    }
    else{
      this.removeVisibilityLevel = 'visibility-3';
    }
  }

  mouseLeave(){
    this.removeVisibilityLevel = 'visibility-0';
  }

}
