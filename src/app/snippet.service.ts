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

  private snippetUrl = 'https://table-qa-develop.alquist.ai/v2/models/TableQA/infer';  // URL to web api
//  private snippetUrl = 'api/snippets';  // URL to web api
// https://table-qa-develop.alquist.ai/v2/models/TableQA/infer

  /** GET heroes from the server */
  getSnippets( ): Observable<Snippet[]> {
    console.log ("get: no param ");
    return this.http.get<Snippet[]>(this.snippetUrl)
  }

  /** POST: add a new hero to the server */
  postQuestion (search : string ): Observable<Snippet[]> {
    var body = {
      query : search,
      topk : 4
    }
    console.log ("snippet-sevice post: ", search);
    return this.http.post<Snippet[]>(this.snippetUrl, body, this.httpOptions);
  }  
    /* .pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))  );*/

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}

