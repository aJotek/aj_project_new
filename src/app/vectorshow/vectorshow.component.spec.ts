import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorshowComponent } from './vectorshow.component';

describe('VectorshowComponent', () => {
  let component: VectorshowComponent;
  let fixture: ComponentFixture<VectorshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
