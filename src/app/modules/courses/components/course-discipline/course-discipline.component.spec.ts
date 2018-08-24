import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDisciplineComponent } from './course-discipline.component';

describe('CourseDisciplineComponent', () => {
  let component: CourseDisciplineComponent;
  let fixture: ComponentFixture<CourseDisciplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDisciplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
