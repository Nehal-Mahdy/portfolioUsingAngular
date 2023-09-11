import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {


  projects : Array <any>= [
    {
      img: "/assets/Screenshot 2023-09-01 205222.png",
      title : "Amazon clone",
      skillsUsed: "HTML, CSS, BootStrap, JavaScript and Jquery",
      link: "#",
   
    },
    {
      img: "/assets/Screenshot 2023-09-10 081818.png",
      title: "Dice Game" ,
      skillsUsed: "HTML, CSS and JavaScript",
      link: "https://nehal-mahdy.github.io/diceGame/",
    },{
      img:"/assets/Screenshot 2023-09-10 082148.png",
      title: "Drum Kit",
      skillsUsed: "HTML, CSS and JavaScript",
      link: "https://nehal-mahdy.github.io/drumkit/",
    },{
      img:"/assets/Screenshot 2023-09-10 082317.png",
      title: "Simon Game",
      skillsUsed: "HTML, CSS and JavaScript",
      link: "https://nehal-mahdy.github.io/html-SimonGame/",
    },{
      img:"/assets/Screenshot 2023-09-10 082429.png",
      title: "Soulful House",
      skillsUsed: "HTML, CSS, BootStrap and JavaScript",
      link: "#",
    },{
      img:"/assets/Screenshot 2023-09-10 082533.png",
      title: "Hosto",
      skillsUsed: "HTML, CSS, BootStrap",
      link: "#",
    }
  ]  


   
}
