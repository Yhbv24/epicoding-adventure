import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFiredComponent } from './get-fired.component';

describe('GetFiredComponent', () => {
  let component: GetFiredComponent;
  let fixture: ComponentFixture<GetFiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
