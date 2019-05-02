import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

    public KEY_USER = 'KEY_USER';

    public setData(key: string, data: any): void {
        sessionStorage.removeItem(key);
        sessionStorage.setItem(key, JSON.stringify(data));
        // this.authValue = token;
    }

    public getData(key: string) {
        return JSON.parse(sessionStorage.getItem(key));
        // return this.authValue;
    }

    public removeData(key: string) {
        return sessionStorage.removeItem(key);
    }





}

