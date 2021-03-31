import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'RDHProject';
  
register(){
  console.log("bom");
  // this.router.navigate
  
}


check_register(){
  console.log("no registered printer");
}
}
