import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtrousersComponent } from './wtrousers.component';

describe('WtrousersComponent', () => {
  let component: WtrousersComponent;
  let fixture: ComponentFixture<WtrousersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtrousersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtrousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
