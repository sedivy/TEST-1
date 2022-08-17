import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Snippet } from '../snippet';
import { SnippetService } from '../snippet.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {

  constructor( private snippetService: SnippetService ) { }

  snippets: Observable <Snippet[]> = new Subject <Snippet[]>() ;

  @Input()
  search : string = '';

  ngOnInit(): void {
   this.snippets = this.snippetService.getSnippets(this.search)
  }

  displayedColumns: string[] = ['id', 'question', 'country', 'year', "confidence", "result"];

}
