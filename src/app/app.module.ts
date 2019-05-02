import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpClientService } from './common/services/http-client.service';
import { HttpModule } from '@angular/http';
import { MessagingComponent } from './messaging/messaging.component';
import { DataService } from './common/services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpClientService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
