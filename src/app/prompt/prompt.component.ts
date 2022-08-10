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
  name  = new FormControl(''); 
  final = new FormControl(''); 

  updateName() {
    this.final.setValue(this.name.getRawValue());
  }
}
