import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGatheringsComponent } from './admin-gatherings.component';

describe('AdminGatheringsComponent', () => {
  let component: AdminGatheringsComponent;
  let fixture: ComponentFixture<AdminGatheringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGatheringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGatheringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
