import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VomitComponent } from './vomit.component';

describe('VomitComponent', () => {
  let component: VomitComponent;
  let fixture: ComponentFixture<VomitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VomitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VomitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
