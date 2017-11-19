import { Injectable } from '@angular/core';
import  {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'  ;
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const BASE_URL = 'http://localhost:3000/items';
const BASE_USER = 'http://localhost:3000/blogs/'
const header = {headers:new Headers({'Content-Type':'application/json'})}



@Injectable()
export class WidgetListService {

  constructor(private http : Http) { }
  currentCat: string;
  loggedIn : boolean = false;

  loadData(){
    return this.http.get(BASE_URL).map((res) => {
      let resi = res.json();
      //console.log(resi);
      return resi;
    });
  }


  loadBlogs(){
    return this.http.get(BASE_USER).map((res) => {
      let resi = res.json();
      //console.log(resi);
      return resi;
    });
  }

  postData(data)
  {
    return this.http.post(BASE_URL,data,header).map(res=>res.json());
  }

  postBlog(data)
  {
    return this.http.post(BASE_USER,data,header).map(res=>res.json());
  }

  updateData(data)
  {
    console.log("This is data"+data);
    return this.http.patch(`BASE_URL$(data.id)`,data,header).map(res=>res.json());
  }

  markAsFav(userId, posts){
    let data = {favBlogs: posts}
    //window.location.reload();
    return this.http.patch(`${BASE_URL}${userId}`, data, header).map(res=>res.json());

  }

  deleteData(id){
    return this.http.delete(`${BASE_USER}${id}`)
      .map(res => res.json());

  }

}
