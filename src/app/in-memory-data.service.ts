import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Snippet } from './snippet';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const snippets = [
      { answer: 12, intent: 'What is the population', country: 'Cuba', year: 2000,  },
      { answer: 13, intent: 'What is the undernurishment', country: 'China', year: 2002, },
      { answer: 14, intent: 'What is the alcohol consumption', country: 'JAR', year: 1992, },
      { answer: 15, intent: 'How mnany 65 woman', country: 'France', year: 1962, }    
/*       { id: 10, answer: 12, intent: 'What is the population', country: 'Cuba', year: 2000,  },
      { id: 11, answer: 13, intent: 'What is the undernurishment', country: 'China', year: 2002, },
      { id: 12, answer: 14, intent: 'What is the alcohol consumption', country: 'JAR', year: 1992, },
      { id: 13, answer: 15, intent: 'How mnany 65 woman', country: 'France', year: 1962, }    
 */    ];
    return {snippets};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(snippets: Snippet[]): number {
  //  return snippets.length > 0 ? Math.max(...snippets.map(snippet => snippet.id)) + 1 : 11;
    return snippets.length;
  }
}

/** answer	:	59555439
intent	:	Population, total
country	:	France
year	:	1995 */