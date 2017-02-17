import { Component, Input} from '@angular/core';
import { Category } from './../../types/category';

@Component({
    moduleId: module.id,
    selector: 'bs-menu',
    templateUrl: 'menu.template.html'
})
export class MenuComponent {
    @Input() categories: Category[];
    @Input() changeCategory: Function;
}