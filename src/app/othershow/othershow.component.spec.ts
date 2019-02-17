import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthershowComponent } from './othershow.component';

describe('OthershowComponent', () => {
  let component: OthershowComponent;
  let fixture: ComponentFixture<OthershowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthershowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthershowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
