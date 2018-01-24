import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMechaniclistComponent } from './manager-mechaniclist.component';

describe('ManagerMechaniclistComponent', () => {
  let component: ManagerMechaniclistComponent;
  let fixture: ComponentFixture<ManagerMechaniclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerMechaniclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMechaniclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
