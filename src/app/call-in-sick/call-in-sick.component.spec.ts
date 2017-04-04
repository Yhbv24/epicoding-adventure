import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallInSickComponent } from './call-in-sick.component';

describe('CallInSickComponent', () => {
  let component: CallInSickComponent;
  let fixture: ComponentFixture<CallInSickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallInSickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallInSickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
