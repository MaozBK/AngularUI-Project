import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsuitsComponent } from './msuits.component';

describe('MsuitsComponent', () => {
  let component: MsuitsComponent;
  let fixture: ComponentFixture<MsuitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsuitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
