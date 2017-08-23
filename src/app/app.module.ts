import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ContactsComponent } from './contacts/contacts.component';
import { LayoutComponent } from './layout/layout.component'; 

@NgModule({
  declarations: [
    AppComponent, ContactsComponent, LayoutComponent				
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
