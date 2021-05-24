import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../model-device/device.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpClient: HttpClient) { }

  index(): Observable<Device[]> {
    return this.httpClient.get<Device[]>(`${environment.baseUrl}/device`)
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseUrl}/device/${id}`)
  }

  create(deviceData: Device): Observable<Device> {
    return this.httpClient.post<Device>(`${environment.baseUrl}/device`, deviceData)
  }

}
