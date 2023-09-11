import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  myskills :string = 'Skills'
  skills : Array<any> = [
    {
      name: "HTML",
      width : "width : 90%"
    },
    {
      name: "CSS",
      width : "width : 93%"
    },
    {
      name: "JavaScript",
      width : "width : 90%"
    },
    {
      name: "JQuery",
      width : "width : 92%"
    },
    {
      name: "BootStrap",
      width : "width : 90%"
    }, {
      name: "Node.JS",
      width : "width : 94%"
    },
    {
      name: "GitHub",
      width : "width : 89%"
    },
    {
      name: "MongoDB",
      width : "width :91%"
    },
    {
      name: "MYSQL",
      width : "width : 82%"
    },
    {
      name: "Angular",
      width : "width : 80%"
    }
    
  ]
}
