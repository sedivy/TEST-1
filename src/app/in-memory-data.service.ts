import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Snippet } from './snippet';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const snippets = [
      { id: 12, question: 'What is the population', country: 'Cuba', year: 2000, confidence: 0.66, result: 'good', },
      { id: 13, question: 'What is the undernurishment', country: 'China', year: 2002, confidence: 0.76, result: 'good', },
      { id: 14, question: 'What is the alcohol consumption', country: 'JAR', year: 1992, confidence: 0.86, result: 'good', },
      { id: 15, question: 'How mnany 65 woman', country: 'France', year: 1962, confidence: 0.81, result: 'good' }    
    ];
    return {snippets};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(snippets: Snippet[]): number {
    return snippets.length > 0 ? Math.max(...snippets.map(snippet => snippet.id)) + 1 : 11;
  }
}

/**export class InMemoryDataService {

  constructor() { }
} */