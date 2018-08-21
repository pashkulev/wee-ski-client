import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPerPageSelectorComponent } from './results-per-page-selector.component';

describe('ResultsPerPageSelectorComponent', () => {
  let component: ResultsPerPageSelectorComponent;
  let fixture: ComponentFixture<ResultsPerPageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsPerPageSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPerPageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
