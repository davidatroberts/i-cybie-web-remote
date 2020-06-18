import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(
    private http: HttpClient,
  ) { }

  sendAction(action) {
    const ipAddress = localStorage.getItem('icybie_ip');
    const restPath = 'http://' + ipAddress + '/' + action.path;
    console.log(restPath)
    return this.http.post<any>(restPath, '');
  }
}
