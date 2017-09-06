import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactsService } from './services/contacts.service';
import { HttpClientModule } from '@angular/common/http';
import { PageTitleService } from '../shared/services/page-title.service';
import { FormsModule } from '@angular/forms';

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
    PageTitleService
  ],

  exports: [
  	FilterPipe
  ]

  

})
export class SharedModule { }
