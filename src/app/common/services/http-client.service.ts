import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Exception } from '../model/exception';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientService {

    public exception: Exception = new Exception();

    constructor(public router: Router,
        private http: Http,
         private httpClient: HttpClient ) { }



    private attachAuthorization(): RequestOptions {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({
            headers: headers,
        });

        return options;
    }

    public post(url: string, requestData: any) {

        //const options = this.attachAuthorization();
        return this.http.post(url, requestData);
    }

    public get(url: string) {

     //   const options = this.attachAuthorization();
        return this.http.get(url);
    }

    public put(url: string, requestData: any) {

        const options = this.attachAuthorization();
        return this.http.put(url, JSON.stringify(requestData));
    }

    public delete(url: string) {

        const options = this.attachAuthorization();
        return this.http.delete(url);
    }

    public extractData(res: Response) {
        if (res.status === 204) {
            //   alert(this.MESSAGE_NO_RECORDFOUND_ERROR);
        } else if (res.status === 401) {

        } else {
            let body: any;
            if (res.text()) {
                body = res.json();
            }
            return body || {};
        }
    }

    public handleError(error: any) {
        try {

            if (error.status == '401') {
                sessionStorage.clear();
                location.replace('/');
            }
            this.exception = JSON.parse(error._body);

        } catch (err) {

            this.exception = new Exception();
            this.exception.message = error._body;
        }
        return Observable.throw(this.exception);

    }





}
