import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PageTitleService {

    private pageTitleSource = new Subject();

    pageTitleAnnounced$ = this.pageTitleSource.asObservable();

    constructor() { }

    setTitle(title: string) {
        this.pageTitleSource.next(title); 
    }
}