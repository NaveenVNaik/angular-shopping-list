import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from "@angular/core";

@Directive({
    selector:'[appDropDown]'
})
export class DropdownDirective {
    //using hostbinding and hostlistner
    @HostBinding('class.open') isOpen :boolean = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    
    // another way of implemetation - using only hostlistner

    /* clickValue: boolean = true;

    constructor(private ele: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') toggleOpen(evenData: Event){
        if(this.clickValue){
            this.renderer.addClass(this.ele.nativeElement,'open');
        }else{
            this.renderer.removeClass(this.ele.nativeElement, 'open');
        }
        this.clickValue = !this.clickValue;
    } */

}