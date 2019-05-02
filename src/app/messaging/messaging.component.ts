import { Component, OnInit } from '@angular/core';
import { CommunicationLog } from '../common/model/communicationLog.model';
import { User } from '../common/model/user';
import { NgForm } from '../../../node_modules/@angular/forms';
import { MessagingService } from './messaging.service';
import { DataService } from '../common/services/data.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {

  public logArray;
  logFound = true;

  public user: User;
  public communicationLog: CommunicationLog;
  public KEY_USER = 'KEY_USER';


  constructor(private messagingService: MessagingService, private dataService: DataService) {
    this.communicationLog = new CommunicationLog();
  }

  ngOnInit() {
   this.user = this.dataService.getData(this.KEY_USER)
   this.communicationLog = new CommunicationLog();
    this.getCommunicationLog();
  }

  public getCommunicationLog() {
    this.communicationLog.userName = this.user.userName;
  

    this.messagingService.getCommunicationLog(this.communicationLog)
      .subscribe(
      response => {
        console.log(response);
        this.logArray = response;
        this.scrollToBottom();
      },
      error => {
        console.log(error);
        this.logFound = false;
      });
  }


  public onSubmitLog(ngForm: NgForm) {
    if (ngForm.valid) {
      this.callSubmitLog(ngForm);
    }
  }
  public onResetCommentLog(ngForm: NgForm) {
    ngForm.resetForm();
  }

  public onRefreshLog() {
    this.getCommunicationLog();
  }


  public callSubmitLog(form: NgForm) {
    this.communicationLog.message = this.communicationLog.message == undefined ? '' : this.communicationLog.message;
    this.communicationLog.userName = this.user.userName;
    this.communicationLog.messageSentTime = new Date();
   // this.formData.append('conflictId', this.user.conflictId);
    this.messagingService.saveCommunicationLog(this.communicationLog)
      .subscribe(
       (response) => {
      
        this.onResetCommentLog(form);
        this.getCommunicationLog();

      },
      error => {
        console.log(error);
        
      });
  }

  scrollToBottom() {
    var obj = document.getElementById('commLog');
    if (obj != undefined && obj.scrollHeight != undefined) {
      obj.scrollTop = obj.scrollHeight;
    }
  }








}
