import { Component, input, OnInit } from '@angular/core';
import { DocumentNode } from '../../../../core/document-node';

@Component({
  selector: 'app-document-checkbox-view',
  standalone: true,
  imports: [],
  templateUrl: './document-checkbox-view.component.html',
  styleUrl: './document-checkbox-view.component.scss'
})
export class DocumentCheckboxViewComponent implements OnInit {

  public node = input.required<DocumentNode>({});
  private static id: number = 0;
  public inputId = 0;

  //Workaround for input id collision
  ngOnInit(): void {
    this.inputId = ++DocumentCheckboxViewComponent.id;
  }
  mouseup(event: Event){
    event.stopPropagation();
  }
}
