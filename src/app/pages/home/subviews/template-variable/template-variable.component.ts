import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.scss']
})
export class TemplateVariableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getDom(el,e){
    console.log(el,e)
  }

}
