import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerWlComponent } from './manager-wl.component';

describe('ManagerWlComponent', () => {
  let component: ManagerWlComponent;
  let fixture: ComponentFixture<ManagerWlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerWlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerWlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
