import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WjacketsComponent } from './wjackets.component';

describe('WjacketsComponent', () => {
  let component: WjacketsComponent;
  let fixture: ComponentFixture<WjacketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WjacketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WjacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
