import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeveninggownsComponent } from './weveninggowns.component';

describe('WeveninggownsComponent', () => {
  let component: WeveninggownsComponent;
  let fixture: ComponentFixture<WeveninggownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeveninggownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeveninggownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
