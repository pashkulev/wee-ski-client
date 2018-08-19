import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResortsComponent } from './admin-resorts.component';

describe('AdminResortsComponent', () => {
  let component: AdminResortsComponent;
  let fixture: ComponentFixture<AdminResortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
