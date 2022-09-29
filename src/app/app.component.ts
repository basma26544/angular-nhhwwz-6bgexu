import { formatDate } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    today= new Date();
    todaysDataTime = '';
    
    ngOnInit(){
    
      this.todaysDataTime = formatDate(this.today, 'hh:mm:ss ', 'en-US');
    }
}
