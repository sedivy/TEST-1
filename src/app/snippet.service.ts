import { Injectable } from '@angular/core';
import { Snippet } from './snippet';
import { SNIPPETS } from './mock-snippets';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor(private messageService: MessageService) { }

  getSnippets(): Observable <Snippet[]> {
    const snippets = of (SNIPPETS);
    this.messageService.add('HeroService: fetched heroes');
    return snippets;
  }
}
