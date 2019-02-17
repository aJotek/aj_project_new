import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomshowComponent } from './randomshow.component';

describe('RandomshowComponent', () => {
  let component: RandomshowComponent;
  let fixture: ComponentFixture<RandomshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
