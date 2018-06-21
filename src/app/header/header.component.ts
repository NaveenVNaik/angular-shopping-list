import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'app-headercomponent',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    @Output() navClicked = new EventEmitter<boolean>();

    onNavClicked = (navClickedItem:String) => {
        this.navClicked.emit(navClickedItem === 'Recipes' ? true : false);
    }
}






