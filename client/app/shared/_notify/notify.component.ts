import { Component, OnInit } from '@angular/core';

import { NotifyService } from './notify.service.ts';

@Component({
    moduleId: module.id,
    selector: 'notify',
    templateUrl: 'notify.component.html'
})

//http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
export class NotifyComponent {
    message: any;

    constructor(private notifyService: NotifyService) { }

    ngOnInit() {
        this.notifyService.getMessage().subscribe(message => { this.message = message; });
    }
}