import {Router} from "@angular/router";
import { Component,OnInit, OnChanges } from '@angular/core';
import {WidgetListService} from "./widget-list.service";
import {DataService} from "./data.service";

@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges{
  ngOnChanges(changes: any): void {
    console.log('on changes app comp');
  }

  title = 'app';
  items: Object [];
  showNavbar: boolean;
  // private router: Router;

  isUserLoggedIn : boolean;
  // logout()
  // {
  //   localStorage.removeItem('isLoggedIn');
  //   this.router.navigate(['/']);
  // }

  // login()
  // {
  //   console.log(this.request.loadData().subscribe((data)=>{this.items = data }));
  //   this.router.navigate(['/']);
  // }
  logg2: boolean;

  ngOnInit() {
    this.request.loadData().subscribe((data) => {
      this.items = data;
      // this.dataService.currentMessage.subscribe(message => this.logg2 = message);

    })
console.log('in init app component');
    this.showNavbar = false;
  }

  constructor(private request: WidgetListService, private dataService: DataService,private router: Router) {
    this.isUserLoggedIn = localStorage.getItem('currentUser') ? true : false;
    console.log('app component constructor');
    console.log(this.request.loggedIn);
  }

  setCat(cat: string) {
    this.request.currentCat = cat;
  }

  logout(event){
    debugger;
    event.preventDefault();
    this.router.navigate(['/login']);
    window.location.reload();
  }

}
