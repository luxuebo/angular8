import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  arrSort(arr:any[]){
    console.log(arr)
  }
}
