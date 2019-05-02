import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../common/model/user';
import { HttpClientService } from '../common/services/http-client.service';
import { WebServiceConstant } from '../common/services/web-constant.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClientService: HttpClientService) { }

  logIn(user: User): Observable<User> {
    return this.httpClientService.post(WebServiceConstant.USER_INFO, user)
      .map(this.httpClientService.extractData)
      .catch(this.httpClientService.handleError);
  }
}
