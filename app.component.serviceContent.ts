import { Component } from '@angular/core';

@Component({
  selector: 'app-services-content',
  templateUrl:'courses.html',
  styleUrls: ['./app.component.service.css']
})
export class ServiceContent {
  title = 'servicecontent';
  courses = ['html5','css3','javascript','jquery','angular.js','react.js']
  addNewCourse(newcourse:string)  {
    this.courses.push(newcourse);
  }

  removeCourse(selectedcourse:string) {
      var index = this.courses.indexOf(selectedcourse);
       this.courses.splice(index,1);
  }
}
