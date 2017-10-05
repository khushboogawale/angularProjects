import { Injectable } from '@angular/core';

@Injectable()
export class SampleDataService {

  constructor() { }

  Cities = ['Pune', 'Mumbai','Baroda'];
  
  myData()
  {
    return 'This is my service data';
  }
}
