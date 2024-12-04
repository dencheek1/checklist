import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  input,
  Input,
  OnChanges,
  OnInit,
  signal,
} from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';
import { DocumentViewComponent } from '../document-view.component';
import { DocumentTableViewComponent } from '../document-table-view/document-table-view.component';
import { PreviewService } from '../../../../service/preview/preview.service';
import { CommonModule, NgClass } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';
import { DocumentCheckboxViewComponent } from '../document-checkbox-view/document-checkbox-view.component';
import { NodeType } from '../../../../core/node-types';
import { node_class } from '../../../../core/node-classes';

@Component({
  selector: 'app-document-node-view',
  standalone: true,
  imports: [
    DocumentViewComponent,
    DocumentTableViewComponent,
    CommonModule,
    DocumentCheckboxViewComponent,
  ],
  templateUrl: './document-node-view.component.html',
  styleUrl: './document-node-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentNodeViewComponent implements OnInit, OnChanges {
  private cdr = inject(ChangeDetectorRef);

  // @Input() node: DocumentNode = {} as DocumentNode;
  public node = input.required<DocumentNode>({});
  public leafClasses = signal<Record<string, boolean>>({ box: false });
  public removeOpacity = signal<number>(0);
  public ne = NodeType;

  private preview = inject(PreviewService);

  public editNode = this.preview.edited;

  constructor() {
    effect(
      () => {
        this.buildClassObject();
        this.leafClasses()['selected'] = this.preview
          .selected()
          .includes(this.node());
      },
      { allowSignalWrites: true }
    );
    toObservable(this.preview.document).subscribe(() => {
      this.buildClassObject();
    });
  }

  setCurrentClasses() {}

  //NG methods
  ngOnInit(): void {
    this.buildClassObject();
  }

  ngOnChanges() {
    this.leafClasses.update((classes) => ({
      ...classes,
      selected: this.preview.selected().includes(this.node()),
    }));
  }

  // event handlers
  hover(e: Event) {
    e.stopPropagation();

    let boundingRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    let mousePositionX = (e as MouseEvent).x;
    let ratio = (mousePositionX - boundingRect.x) / boundingRect.width;

    // TODO make opacity dependent on distance from
    // ? Don't look nice with current placeholder, would it be better with normal icon?
    this.removeOpacity.set(
      ratio < 0.25
        ? 0.25
        : ratio > 0.75 ||
          mousePositionX - boundingRect.x > boundingRect.width - 20
        ? 1
        : ratio * 1.5 - 0.125
    );
  }

  select(event: MouseEvent) {
    event.stopPropagation();
    let node = this.node();
    // this.node().children.length > 0
    //   ? this.node().children[this.node().children.length - 1]
    //   : this.node();

    this.preview.selected().includes(this.node())
      ? this.preview.clearSelected()
      : event.shiftKey
      ? this.preview.addSelected(node)
      : this.preview.setSelected([node]);
    this.cdr.markForCheck();
  }

  mouseLeave() {
    this.removeOpacity.set(0);
  }

  removeNode(event: Event, node: DocumentNode) {
    event.stopPropagation();

    this.preview.selected().includes(this.node())
      ? this.preview.removeSelectedNodes()
      : this.preview.removeNode(this.node());
  }

  // utility methods
  checkClasses() {}

  // this method initialises class variable
  buildClassObject() {
    //TODO do something with common properties. make an enum for this stuf.
    // * completed
    let classes = structuredClone(this.node().properties) as Record<
      string,
      boolean
    >;
    this.leafClasses.set(classes);
  }

  // TODO make sain div selection and focus
  mufleEvent(e: MouseEvent) {
    if (!e.ctrlKey) e.stopPropagation();
    else (e.target as HTMLElement).focus();
  }

  selectEvent(event: Event) {
    console.log((event.target as HTMLElement).textContent);
    this.save(event);
  }
  edit(e: Event) {
    this.preview.setEdited(this.node());
    this.preview.clearSelected();
    (e.target as HTMLElement).focus();
  }

  save(e: Event) {
    let text = (e.target as HTMLElement).textContent;
    if (text) this.preview.finishEdit(text);
  }
}
