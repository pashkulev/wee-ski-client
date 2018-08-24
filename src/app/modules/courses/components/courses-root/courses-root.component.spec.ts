import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesRootComponent } from './courses-root.component';

describe('CoursesRootComponent', () => {
  let component: CoursesRootComponent;
  let fixture: ComponentFixture<CoursesRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
