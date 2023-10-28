import { style } from '@angular/animations';
import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBackgound:string = ''
  @Input() desiredBackgound:string = ''

  @HostBinding ('style.backgroundColor') backgroundColor:string = 'transparent'

  constructor(private renderer :Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green') */
  }

  @HostListener ('mouseenter') mouseEnt(){
   /*  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'purple') */
    this.backgroundColor = this.desiredBackgound
  }

  @HostListener ('mouseleave') mouseOff(){
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white') */
    this.backgroundColor = this.defaultBackgound

  }
}
