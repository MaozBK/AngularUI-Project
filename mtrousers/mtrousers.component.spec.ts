import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtrousersComponent } from './mtrousers.component';

describe('MtrousersComponent', () => {
  let component: MtrousersComponent;
  let fixture: ComponentFixture<MtrousersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtrousersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtrousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
