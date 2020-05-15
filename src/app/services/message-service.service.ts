import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {portfolioConfig} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private http: HttpClient) { }

  sendMessage(body) {
    return this.http.post(portfolioConfig.email, body);
  }

}
