import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactsService } from './services/contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { PageTitleService } from '../shared/services/page-title.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  
  declarations: [ 
  FilterPipe
  ],

  providers: [
    ContactsService,
    PageTitleService,
    AuthService
  ],

  exports: [
  	FilterPipe
  ]

  

})
export class SharedModule { }
