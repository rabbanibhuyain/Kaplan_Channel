
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Config} from '../../shared/config';


@Injectable()
export class ChannelInterfaceService {
  nodeServiceUrl: string;

  constructor(private _http: Http) {
    this.nodeServiceUrl = Config.NODE_CHANNEL_ENDPOINT;
  }

  getChannelData(): Observable<any> {
    const channelDataEndpoint = this.nodeServiceUrl + 'channelData';
    console.log('URL: ' + channelDataEndpoint );
    return this._http.get(channelDataEndpoint).map(res => res.json());
  }


}
