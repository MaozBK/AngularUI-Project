import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MjacketsComponent } from './mjackets.component';

describe('MjacketsComponent', () => {
  let component: MjacketsComponent;
  let fixture: ComponentFixture<MjacketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MjacketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MjacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
