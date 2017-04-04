import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesperateComponent } from './desperate.component';

describe('DesperateComponent', () => {
  let component: DesperateComponent;
  let fixture: ComponentFixture<DesperateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesperateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
