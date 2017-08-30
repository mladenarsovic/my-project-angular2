import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.model';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './components/contacts/contacts.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { ContactFormComponent } from './components/contacts/contact-form/contact-form.component';
import {CustomFormsModule} from 'ng2-validation';


@NgModule({
  declarations: [
    AppComponent, ContactsComponent, LayoutComponent, MessagesComponent, ContactDetailsComponent, ContactFormComponent				
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
