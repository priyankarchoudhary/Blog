import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {WidgetListService} from "../../../widget-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AllBlogsComponent implements OnInit {

  constructor(public request: WidgetListService) {
  }

  Items: any[];
  Users: any[];

  get user(): any {
    let x = JSON.parse(localStorage.getItem('currentUser'));
    return x.username;
  }

  x: any;

  DeleteBlogs(x) {
    //this.Items.splice(x,1);
    this.request.deleteData(x)
      .subscribe(data => {
        this.Items.splice(x, 1);
      });
    window.location.reload();

  }

  MarkAsFavorite(x) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log("I received:" +x);
    // console.log(this.Users);
    // console.log(this.Users[currentUser.id].favBlogs.push(x));
    // console.log(JSON.parse(this.Users[currentUser.id].favBlogs.push(x)));
    // console.log("Item pushed")
    this.Users[currentUser.id].favBlogs.push(x);
    this.request.markAsFav(currentUser.id, this.Users[currentUser.id].favBlogs).subscribe(data => {
      console.log(data)
    });

  }

  TechBlog()
  {

  }




  ngOnInit() {

    this.request.loadBlogs().subscribe((data)=>
    {
      this.Items = data;
    })


    this.request.loadData().subscribe((data)=>
    {
      this.Users = data;
    })

  }

}
