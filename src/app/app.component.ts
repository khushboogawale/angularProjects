import { Component } from '@angular/core';
import { SampleDataService } from './sample-data.service';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  // Templating Basics
  // templateUrl: './app.component.html',
  // template : `
  // <h1>This is first angular JS4 header</h1>
  // <h2>Angular JS4 header2</h2>
  // <h4>My Object properties are : {{myObject.location + "  " + myObject.age}}</h4>
  // <h6>{{myarray}}</h6>
  // <ul>
  //   <li *ngFor="let arrEle of myarray">{{arrEle}}</li>
  // </ul>

  // <li *ngIf="myarray">Array exists</li>
  
  // <li *ngIf="myObj == 'something'">MyObj is existing</li>
  // <li *ngIf="myObj != 'something'">MyObj does not existing</li>

  // <li *ngIf="myObj; else otherTmpl">Myobject exists</li>

  // <ng-template #otherTmpl>Object doesnt exist</ng-template>

  // <div *ngIf="myObj1; then tmpl1 else tmpl2"></div>
  //   <ng-template #tmpl1>Object is true</ng-template>
  //   <ng-template #tmpl2>Object is false</ng-template>

  // `,

  // //Property Binding
  // template : `
  //   <div>
  //     <img src="{{SampleImage}}" width=100 height=100>
  //     <img [src]="SampleImage" width=100 height=100>
  //     <img bind-src="SampleImage" width=100 height=100>
  //   </div>
  //   <button [disabled]="buttonStatus=='enabled'">Sample Button</button>
  // `,

  // //Event Binding
  // template :
  // `<h1> Sample Angular Demo Project</h1>
  //  <button (click)="myEvent($event)">Button Event</button>

  // //Class Bindings
  //  <h2 [class]="titleClass"> Dynamically control CSS classes using class bindings using 1 class only</h2>
  //  <h2 [ngClass]="titleClasses"> Dynamically control CSS classes using class bindings using multiple classes</h2>

  // //Style Bindings
  //  <h2 [style.color]="titleStyle"> Dynamically control CSS styles using Style bindings</h2>
  //  <h2 [style.color]="titleStyle1 ? 'green' : 'pink'"> Dynamically control CSS styles using Style bindings with conditions</h2>
  //  <h2 [style.color]="titleStyle2 ? 'green' : 'pink'"> Dynamically control CSS styles using Style bindings with different conditions</h2>
  //  <h2 [ngStyle]="titleStyles"> Dynamically control CSS styles using Style bindings using multiple Styles</h2>
  // `,

  //Services : Reusable code that can be accessed from multiple components
  // to generate service use command as : ng g service name-of-service
  // Ex: ng g service sampleData
  // this will created service as : sample-data.service.ts
  //Service returning values
  // template:`
  // <h1>Making use of Service</h1>
  // <p>{{someProperty}}</p>
  // `,

  // Command to install animation in angular as its not by default supported in angular-core
  // npm install @angular/animations@latest
  // Style Basics
  //styleUrls: ['./app.component.css']
  // styles : [`
  // h1{
  //   text-decoration:underline
  // }

  // .red-title
  // {
  //   color:red
  // }

  // .large-title
  // {
  //   font-size:1em
  // }
  // `]

  // Making animations in angular4
  template:`
  <p [@myAnimation]='state' (click)="animateMe()"> My animation goes here</p>
  `,
  styles:[`
  p{
    width :300px;
    background:lightgray;
    margin : 100px auto;
    text-align : center;
    padding : 20px;
    font-size : 1.5em;
  }
  `],
  animations:[
    trigger('myAnimation',[
        state('small',style({ transform : 'scale(1)'})),
        state('large',style({ transform : 'scale(1.2)'})),
        // transition('small <=> large', animate('300ms ease-in', style({ transform : 'translateY(40px)'}))
        transition('small <=> large', animate('300ms ease-in', 
                    keyframes([
                      style({ opacity : 0, transform:'translateY(-20%)', offset: 0}),
                      style({ opacity : 1, transform:'translateY(30px)', offset: 0}),
                      style({ opacity : 1, transform:'translateY(-20%)', offset: 0})
                    ]))),
      ]),
    ]

})
export class AppComponent {
  // Animations start
    state : string ='small';
    animateMe()
    {
      this.state = (this.state === 'small' ? 'large' : 'small');
    }
  // Animations end

  // Accessing the service can be invoked by dependency injection
  // start
  constructor(private sampleDataService:SampleDataService)
  {

  }
  
  someProperty:string = '';

  ngOnInit()
  {
    console.log(this.sampleDataService.Cities);
    this.someProperty=this.sampleDataService.myData();
  }
  //end

  //Style binding : Dynamically control styles using Style bindings
  //start
  titleStyle = 'blue';
  titleStyle1 = true;
  titleStyle2 = false;
  titleStyles = {
    'color' : 'orange',
    'font-size' : '3em'
  }
  //end

  //Class binding : Dynamically control CSS classes using class bindings
  //start
  titleClass = "red-title"

  titleClasses ={
    'red-title': true,
    'large-title':true
  }
 //end
  myObject = {
    location : "USA",
    age : 30
  }

  myarray = ["Array1","Array2","Array3"];

  myObj = "something"

  myObj1 = "somevalue"

  SampleImage = "https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg";

  buttonStatus = 'enabled'

  myEvent(event)
  {
    console.log(event);
  }
}
