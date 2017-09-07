import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.model';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './components/contacts/contacts.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { ContactFormComponent } from './components/contacts/contact-form/contact-form.component';
import { ContactsService } from './shared/services/contacts.service';
import { ContactRowComponent } from './components/contacts/contact-form/contact-row/contact-row.component';
import { LoginComponent } from './components/auth/login.component';

import {CustomFormsModule} from 'ng2-validation';


@NgModule({
  declarations: [
    AppComponent, 
    ContactsComponent,
    LayoutComponent, 
    MessagesComponent, 
    ContactDetailsComponent, 
    ContactFormComponent,
    ContactRowComponent,
    LoginComponent				
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'ContactsService1', useClass: ContactsService},
    {provide: 'APP_CONFIG_DEFAULT_TITLE', useValue: 'Some default title'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
