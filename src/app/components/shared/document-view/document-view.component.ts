import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  forwardRef,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { DocumentNode } from '../../../core/document-node';
import { DocumentNodeViewComponent } from './document-node-view/document-node-view.component';
import { PreviewService } from '../../../service/preview/preview.service';
import { toObservable } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-document-view',
  standalone: true,
  imports: [forwardRef(() => DocumentNodeViewComponent)],
  templateUrl: './document-view.component.html',
  styleUrl: './document-view.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentViewComponent implements OnInit {
  constructor(protected cdr: ChangeDetectorRef, protected preview: PreviewService) {

    toObservable(preview.document).subscribe(
      () => {
        cdr.markForCheck()
      });
  }

  // cdr = inject(ChangeDetectorRef);
  // preview = inject(PreviewService);

  @Input() document!: DocumentNode;
  ngOnInit(): void {
    this.preview.setDocument(structuredClone(this.document));

  }

  deleteSelected() {
    this.preview.removeNodes(this.preview.selected());
    this.preview.clearSelected();
  }
}
