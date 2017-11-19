import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {WidgetListService} from "../../widget-list.service";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  items:Object [];
  model :any={};


  constructor(private router :Router,private request:WidgetListService,private dataServ:DataService) {
    localStorage.clear();
  }

  ngOnInit() {
    this.request.loadData().subscribe((data)=>{
      this.items = data;
    });
  }
 logger : boolean=false;

  ob:Object;
  login(model){
    let i=0;
    console.log(this.items);
    // console.log(this.logger);
    for(var item in this.items){
      this.ob = this.items[i];
      // console.log(this.logger);
      if(this.ob["username"]==this.model.username  && this.ob["password"]==this.model.password){
        // this.logger=true;
        // this.dataServ.changeMessage(this.logger);
        localStorage.setItem("currentUser",JSON.stringify(this.items[i]));
        // console.log(this.model.username);
          this.router.navigate(['/allblogs']);
        this.request.loggedIn = true;
          break;
      }
      i++;
    }
  }
}
