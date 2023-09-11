import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfProjectComponent } from './child-of-project.component';

describe('ChildOfProjectComponent', () => {
  let component: ChildOfProjectComponent;
  let fixture: ComponentFixture<ChildOfProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOfProjectComponent]
    });
    fixture = TestBed.createComponent(ChildOfProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
