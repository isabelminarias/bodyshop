import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCarcheckComponent } from './manager-carcheck.component';

describe('ManagerCarcheckComponent', () => {
  let component: ManagerCarcheckComponent;
  let fixture: ComponentFixture<ManagerCarcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerCarcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerCarcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
