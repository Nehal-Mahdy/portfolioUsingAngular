import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-of-project',
  templateUrl: './child-of-project.component.html',
  styleUrls: ['./child-of-project.component.css']
})
export class ChildOfProjectComponent {
@Input() childProject : any;
@Input() childIndex : any;
}
