import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {WidgetListService} from "../../../widget-list.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-favorite-blogs',
  templateUrl: './favorite-blogs.component.html',
  styleUrls: ['./favorite-blogs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FavoriteBlogsComponent implements OnInit {

  constructor(private request:WidgetListService) { }
  ItemBlogs: any[] = new Array<any>();
  ItemCredentials: any[];
  FavoriteBlogs : any[];
  myArray:Object[];
  myObjects : Object[];

  get user(): any {
    let x =  JSON.parse(localStorage.getItem('currentUser'));
    return x.username;
  }

  get userFavorites(): any {
    var y =  localStorage.getItem('currentUser');
    var temp = JSON.parse(y)
    this.FavoriteBlogs =temp.favBlog;
    return temp.favBlogs;
  }
  x :any ;


  ngOnInit() {
    this.request.loadBlogs().subscribe((data)=> {
      //this.ItemBlogs = data;
      debugger;
      for (var i in data) {
        this.ItemBlogs.push(
          {postedBy: data[i].postedBy,
          blogTitle: data[i].blogTitle,
          blogCategory: data[i].blogCategory,
          blogContent: data[i].blogContent,
          id: data[i].id}
          )
      }
     // localStorage.setItem("allBlogs",JSON.stringify(this.ItemBlogs));
      //localStorage.setItem("allCredentials",JSON.stringify(this.ItemCredentials));

    })
    console.log(this.ItemBlogs);


    this.request.loadData().subscribe((data)=>
    {
      this.ItemCredentials = data;
    })


    var y =  localStorage.getItem('currentUser');
    var temp = JSON.parse(y)
    var z =temp.favBlog;
    this.myArray=temp.favBlogs;
    console.log(this.myArray)

    //console.log(temp.favBlogs); //Favarite blogs of current user
    //console.log(temp);          // All content of current user

    y = localStorage.getItem("allBlogs");
    temp  = JSON.parse(y);
    //console.log("y mere bhai "+y);
    //console.log(this.ItemBlogs)
    console.log(temp);
  }
  getIndex(id) {
    return this.ItemBlogs.findIndex(x => x.id === id);
  }

}
