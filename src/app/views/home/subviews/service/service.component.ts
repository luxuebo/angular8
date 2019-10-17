import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../../services/hero.service'
//方式一:使用服务
let service = new HeroService();

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }
  getService(){
    //使用服务
    service.get('方式一:使用服务(不推荐)');
    this.heroService.get('方式二:使用服务(推荐)');
  }

}
