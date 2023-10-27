import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer :Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green')
  }

  @HostListener ('mouseenter') mouseEnt(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'purple')
  }

  @HostListener ('mouseleave') mouseOff(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white')
  }
}
