import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';
import { MessagesComponent } from './components/messages/messages.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/contacts',
		pathMatch: 'full'
	},
	{
		path: 'contacts',
		component: ContactsComponent
	},
	{
		path: 'messages',
		component: MessagesComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(
  			appRoutes
  		),
	],

	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}