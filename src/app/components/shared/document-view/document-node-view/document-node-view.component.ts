import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  effect,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentViewComponent } from '../document-view.component';
import { DocumentTableViewComponent } from '../document-table-view/document-table-view.component';
import { PreviewService } from '../../../../service/preview/preview.service';
import { NgClass } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-document-node-view',
  standalone: true,
  imports: [DocumentViewComponent, DocumentTableViewComponent, NgClass],
  templateUrl: './document-node-view.component.html',
  styleUrl: './document-node-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentNodeViewComponent implements OnInit, OnChanges {
  private prs = inject(PreviewService);
  private cdr = inject(ChangeDetectorRef);

  @Input() node: DocumentNode = {} as DocumentNode;

  constructor() {
    effect(() => {
      this.leafClasses['selected'] = this.preview
        .selected()
        .includes(this.node);
      this.cdr.markForCheck();
    });
    // effect(() => {
      // console.log('document changed')
      // this.preview.document();
      // this.cdr.markForCheck();
    // });
    // observable this.preview.document
    toObservable(this.preview.document).subscribe(()=>{
      this.cdr.detectChanges();
    });
  }


  leafClasses: Record<string, boolean> = {};
  removeOpacity = 0;
  preview = inject(PreviewService);

  //NG methods 
  ngOnInit(): void {
    // console.log(this.leafClass);
    this.bouldClassObject();
    this.leafClasses['wrapper'] = true;
  }

  ngOnChanges() {
    this.leafClasses['selected'] = this.preview.selected().includes(this.node);
    console.log(this.leafClasses);
  }


  // event handlers
  hover(e: Event) {
    e.stopPropagation();

    let boundingRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    let mousePositionX = (e as MouseEvent).x;
    let ratio = (mousePositionX - boundingRect.x) / boundingRect.width;

    // TODO make opacity dependent on distance from
    this.removeOpacity = ratio;

    if (ratio < 0.25) {
      this.removeOpacity = 0.25;
    } else if (
      ratio > 0.75 ||
      mousePositionX - boundingRect.x > boundingRect.width - 20
    ) {
      this.removeOpacity = 1;
    } else {
      this.removeOpacity = ratio * 1.5 - 0.125;
    }
  }

  select(event: MouseEvent) {
    event.stopPropagation();
    let node = this.node
    if(this.node.children.length > 0){
      node = this.node.children[-1]
    }
    event.shiftKey ? this.preview.addSelected(node) : this.preview.setSelected([node]);
  }

  mouseLeave() {
    this.removeOpacity = 0;
  }

  removeNode(event: Event, node: DocumentNode) {
    //TODO create some service to remove node from document viewed tree
    this.preview.removeNode(node);
    event.stopPropagation();
  }



  //utility methods
  checkClasses() {}

  //this method initialises class variable
  bouldClassObject() {
    this.leafClasses = this.node.properties.reduce(
      (acc: Record<string, boolean>, prop) => {
        acc[`${prop}`] = true;
        return acc;
      },
      {} as Record<string, boolean>
    );
  }
}
