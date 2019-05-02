import { Injectable } from '@angular/core';

@Injectable()
export class UserInfo {

    private userInfo = 'userInfo';

   public setUserInfo(data: any): void {
    sessionStorage.setItem(this.userInfo, JSON.stringify(data));
    // this.userData = data;
}

private getUser() {
    return sessionStorage.getItem(this.userInfo);
}

}
