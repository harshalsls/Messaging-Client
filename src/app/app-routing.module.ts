import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessagingComponent } from './messaging/messaging.component';

// Import Containers

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'messaging',
    component: MessagingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
