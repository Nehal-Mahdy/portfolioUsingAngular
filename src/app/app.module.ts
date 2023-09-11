import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ChildOfProjectComponent } from './child-of-project/child-of-project.component';
//ng bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//Angular material
// // import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    ChildOfProjectComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
