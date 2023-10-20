import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  whenDisabled = true; 
  easierWay: string = '';
  myDefaultString: string = '';

  //varibales for the second input
  reuseableStrings: string = '';
  modelText: string = '';
  reuseableStringarray: string[] = [];

  //variables for the third
  whenICantClick = true;
  getInputValue:string = '';

  //variables for the forth
  modelWhenNotEmpty = '';
  assignModelValue = '';
  whenICantClickTwo = true;



  myTarget: boolean = false;

  serverText = "Server was not created";
  constructor() { }

  ngOnInit(): void {
    this.setButtonTimeout();

  }

  setButtonTimeout(){
    setTimeout(()=>{
      this.whenDisabled = false;
    }, 5000)
  }

  onButtonClick2(){
   /*  From the Html, we're assigning the value of modelText(i.e the text out ngModel has helped up get from the input)
    to the empty string we're instanciating here. Therefore, we're using our empty string(reuseableString) where we want with it's new value. */
    this.reuseableStrings = this.modelText;
    this.reuseableStringarray.push(this.reuseableStrings);
    console.log(this.reuseableStrings);

   /*   for(let i=0; i<this.reuseableStringarray.length; i++){
      console.log(this.reuseableStringarray[i]);
    }  */
  }

  onButtonClick(){
    /* this.serverText = "Server was created alreadyyyy";
    this.easierWay; */
    this.myTarget = true;

  }
  getEvent(event: Event){
    //this.myTarget = (<HTMLInputElement>event.target).value;
  }

  getWhenNotEmpty(event: Event){
    this.getInputValue = (<HTMLInputElement>event.target).value;
    if(this.getInputValue != ''){
     this.whenICantClick = false;
    }
    else this.whenICantClick = true;
  }

 /*  this method would not work because there's nothing thriggering it in the html, that's why i'm 
  using directly "!modelWhenNotEmpty" in the button's disabled property */
  getWhenNotEmptyTwo(){
    if(this.modelWhenNotEmpty){
     this.whenICantClickTwo = false;
     console.log("fiorst"+this.whenICantClickTwo);
    }
    else {
      this.whenICantClickTwo = true;
      console.log(this.modelWhenNotEmpty)
      console.log("second"+this.whenICantClickTwo);
  
    }
    console.log("third"+this.whenICantClickTwo)

  }
}
