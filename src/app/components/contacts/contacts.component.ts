import { Component, Injector } from '@angular/core';
import { ContactsService } from '../../shared/services/contacts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Contact } from '../../shared/models/contact.model';
import { Observable, Observer } from 'rxjs';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html'
})

export class ContactsComponent 
{
	
	private contacts: any = [];
	private filter: string = '';
	private contactService : ContactsService;
	



	constructor(private injector: Injector ){
		this.contactService = this.injector.get(ContactsService);
		this.contactService.getContacts().subscribe(
			data => {
			this.contacts = data;
		},
		(err: HttpErrorResponse) => {
			alert(`Backend returned code ${err.status} with message: ${err.error}`);
		});

	}

	remove(contact)
	{
		const index = this.contacts.indexOf(contact);
		this.contactService.removeContact(contact)
		.subscribe(
			(contact: Contact) => {
				const index = this.contacts.indexOf(contact);
				this.contacts.splice(index, 1);
			}
		)
	}

	submitContact(contact: Contact){
		if(contact.id){
			this.contactService.editContact(contact)
			.subscribe(
				(contact: Contact) => {
					let existingContact = this.contacts.filter(c => c.id == contact.id);
					if(existingContact.length) {
						Object.assign(existingContact[0], contact);
					}
				}
			)
		}else{
			this.contactService.addContact(contact).
			subscribe(
				contact => {
					this.contacts.push(contact);
				}
			);

		}
	
		
	}


}