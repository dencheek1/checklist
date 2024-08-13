import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocumentNode } from '../core/document-node';
import { testJson } from '../../assets/checklist';
import { DocumentViewComponent } from "./shared/document-view/document-view.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DocumentViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'checklist';


  document = testJson as DocumentNode;

  ngOnInit(){
  }

}
