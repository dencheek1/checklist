import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocumentNode } from '../core/document-node';
import { testJson } from '../../assets/checklist';
import { DocumentViewComponent } from "./shared/document-view/document-view.component";
import { DocumentEditPageComponent } from './document-edit-page/document-edit-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DocumentViewComponent, DocumentEditPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'checklist';


  document = testJson as DocumentNode;

  ngOnInit(){
  }

}
