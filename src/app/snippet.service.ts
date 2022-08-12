import { Injectable } from '@angular/core';
import { Snippet } from './snippet';
import { SNIPPETS } from './mock-snippets';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor() { }

  getSnippets(): Observable <Snippet[]> {
    const snippets = of (SNIPPETS);
    return snippets;
  }
}
