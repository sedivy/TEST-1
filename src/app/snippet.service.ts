import { Injectable } from '@angular/core';
import { Snippet } from './snippet';
import { SNIPPETS } from './mock-snippets';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor() { }

  getHeroes(): Snippet[] {
    return SNIPPETS;
  }
}
