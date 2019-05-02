import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/services/http-client.service';
import { Observable } from '../../../node_modules/rxjs';
import { WebServiceConstant } from '../common/services/web-constant.service';
import { User } from '../common/model/user';
import { CommunicationLog } from '../common/model/communicationLog.model';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private httpClientService: HttpClientService) { }



  getCommunicationLog(communicationLog: CommunicationLog): Observable<CommunicationLog> {
    return this.httpClientService.post(WebServiceConstant.GET_COMMUNICATION_LOG, communicationLog)
      .map(this.httpClientService.extractData)
      .catch(this.httpClientService.handleError);
  }


  saveCommunicationLog(communicationLog: CommunicationLog): Observable<CommunicationLog> {
    return this.httpClientService.post(WebServiceConstant.SAVE_COMMUNICATION_LOG, communicationLog)
      .map(this.httpClientService.extractData)
      .catch(this.httpClientService.handleError);
  }

}
