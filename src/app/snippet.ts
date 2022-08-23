
export interface Snippet {
  /* id : number; */
  answer: number;
  intent: string;
  country: string;
  year: number;
}  
  /* 
answer	:	59555439
intent	:	Population, total
country	:	France
year	:	1995
 */

export interface RetSnippet {
  results : Snippet[];
}