import { Injectable } from '@angular/core';
import { Snippet } from './snippet';
import { SNIPPETS } from './mock-snippets';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor(private http: HttpClient) { }

  private snippetUrl = 'api/snippets';  // URL to web api

  /** GET heroes from the server */
  getSnippets(search : string ): Observable<Snippet[]> {
    return this.http.get<Snippet[]>(this.snippetUrl)
  }
}

/**  getSnippets(): oobservablee <Snippet[]> {
    const snippets = of (SNIPPETS);
    return snippets;
  } */
