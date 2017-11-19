import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {WidgetListService} from "../../../widget-list.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddBlogComponent implements OnInit {
  blogs : Object[];
  model :any={};
  title ;
  constructor(private request: WidgetListService, private router: Router) { }

  ngOnInit() {
    this.request.loadBlogs()
      .subscribe((data) => {
        this.blogs = data;

      })
  }

  AddBlogs(model)
  {
    var data=localStorage.getItem("currentUser");
    let parsedData = JSON.parse(data);
    let blog = {
      postedBy : parsedData.username,
      blogTitle: model.blogtitle,
      blogCategory: model.blogCategory,
      blogContent : model.blogContent
    };

    this.request.postBlog(blog)
      .subscribe(data => {
        //console.log(data);
        this.blogs.push(data);

      });


    this.router.navigate(['/allblogs']);
    window.location.reload();


  }

}
