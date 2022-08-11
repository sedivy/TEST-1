import { Component, OnInit } from '@angular/core';
import { Snippet } from '../snippet';
import { SnippetService } from '../snippet.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  snippet: Snippet = {
    id: 1,
    question: "how is it going",
    country: "USA",
    year: 1990,
    confidence: 0.99,
    result: "gopd idea"
  }

  snippets: Snippet[] = [] ;
  
  constructor( private snippetService: SnippetService ) { }

  getSnippets(): void {
    this.snippetService.getSnippets()
    .subscribe (snippets => {
      return this.snippets = snippets;
    });
  }

  ngOnInit(): void {
    this.getSnippets();
  }

}
