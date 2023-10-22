import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-local-references',
  templateUrl: './local-references.component.html',
  styleUrls: ['./local-references.component.css']
})
export class LocalReferencesComponent implements OnInit {
  serverValue: any = ''
  childValue:any = ''
  constructor() { }

  ngOnInit(): void {
  }

  /* Local refrences are used to get access to elements and their value. Like in the example below. Another way yo get access 
  to elements and their value is using @viewChild() */

  getLocalReference(references: HTMLInputElement){
    this.serverValue = references.value
    console.log(this.serverValue)
  }

  @ViewChild('viewMyChild')
  viewMyChild!: ElementRef;

  getValueWithViewChild(){
    this.childValue = this.viewMyChild.nativeElement.value
  }

}
