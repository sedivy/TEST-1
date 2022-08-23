import { registerLocaleData } from '@angular/common';
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

  snippets = new BehaviorSubject <Snippet[]>([]) ;

  @Input()
  search : string = '';


  ngOnInit(): void {
    console.log ("ngOnInit basic-table: ", this.search);
    this.snippetService.postQuestion ( this.search ).subscribe((result) => {
      console.log ("result", result);
      this.snippets.next (result.results)
    });
    console.log ("ngOnInit this.snippet: ", this.snippets);
  }  /* postQuestion (this.search )   getSnippets()*/

  displayedColumns: string[] = ['answer', 'intent', 'country', 'year'];
  /* displayedColumns: string[] = ["id", 'answer', 'intent', 'country', 'year']; */

}
