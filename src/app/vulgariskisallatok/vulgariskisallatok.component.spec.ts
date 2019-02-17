import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VulgariskisallatokComponent } from './vulgariskisallatok.component';

describe('VulgariskisallatokComponent', () => {
  let component: VulgariskisallatokComponent;
  let fixture: ComponentFixture<VulgariskisallatokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulgariskisallatokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VulgariskisallatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
