import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalkshowComponent } from './chalkshow.component';

describe('ChalkshowComponent', () => {
  let component: ChalkshowComponent;
  let fixture: ComponentFixture<ChalkshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChalkshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalkshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
