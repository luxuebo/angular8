import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {
public title:string='mine works';
  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    
  }

}
