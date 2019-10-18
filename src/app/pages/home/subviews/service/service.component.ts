import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common/common.service'
//方式一:使用服务
let commonService = new CommonService();

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private CommonService: CommonService) { }

  ngOnInit() {
  }
  getService(){
    //使用服务
    commonService.arrSort([80,85,90,10]);
    this.CommonService.arrSort([20,100,60,30]);
  }

}
