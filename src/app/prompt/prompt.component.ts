import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = new FormControl(''); 
  searchPrompt : string |null = "";

  search() {
    this.searchPrompt = this.name.value;
    console.log ("prompt search: ", this.searchPrompt);
  }

}
