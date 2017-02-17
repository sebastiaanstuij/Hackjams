import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bs-sidebar',
    templateUrl: 'sidebar.template.html'
})
export class SideBarComponent {
    @Output() sidebarHasBeenToggled = new EventEmitter();
    @Output() searchTermChanged = new EventEmitter();
    
    navClosed: boolean = true;

    toggleSideBar(): void {
        this.navClosed = !this.navClosed;
    }

    search(searchTerm) {}     
}