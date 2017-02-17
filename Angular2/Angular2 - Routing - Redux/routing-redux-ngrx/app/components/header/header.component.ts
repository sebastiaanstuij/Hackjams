import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bs-header',
    templateUrl: 'header.template.html'
})
export class HeaderComponent {
    title: string = 'Books by Hackages';
}