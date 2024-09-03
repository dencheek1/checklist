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
  removeOpacity = 0;

  ngOnInit(): void {
    // console.log(this.leafClass);
  }

  hover(e: Event) {
    // console.log((e.currentTarget as HTMLElement).getBoundingClientRect());
    // console.log((e as MouseEvent).offsetX);
    e.stopPropagation();
    // this.removeVisibilityLevel = 'visibility-1';
  
    let boundingRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    let mousePositionX = (e as MouseEvent).x;
    let ratio = (mousePositionX - boundingRect.x)/ boundingRect.width;

//    console.log(ratio)

   // TODO make opacity dependent on distance from 
    this.removeOpacity = ratio;
    
    if (ratio < 0.25 ) {
      this.removeOpacity = 0.25; 

    } else if (ratio > 0.75 || (mousePositionX - boundingRect.x) > boundingRect.width - 20){
      this.removeOpacity = 1;
    }
    else{
      this.removeOpacity = ratio*1.5 - 0.125;
    }
     
  }

  mouseLeave(){
    this.removeOpacity = 0;
  }

  removeNode(node: DocumentNode){
    //TODO create some service to remove node from document viewed tree
  }

}
