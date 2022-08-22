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
    console.log ("ngOnInit basic-table: ", this.search);
    this.snippets = this.snippetService.postQuestion ( this.search )
  }  /* postQuestion (this.search )   getSnippets()*/

  displayedColumns: string[] = ["id", 'answer', 'intent', 'country', 'year'];

}
