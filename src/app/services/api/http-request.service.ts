import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  public baseUrl: string = 'http://localhost:8080'
  constructor() { }
  axiosGet(api: string, data?: object) {
    return new Promise((resolve, reject) => {
      axios.get(this.baseUrl + api, {
        params: data
      })
        .then(function (response) {
          // handle success     
          resolve(response)
        });
    })
  }
  axiosPost(api: string, data: object = {}) {
    return new Promise((resolve, reject) => {
      axios.post(this.baseUrl + api, data)
        .then(function (response) {
          // handle success     
          resolve(response)
        });
    })
  }

}
