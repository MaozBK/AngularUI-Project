import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfootwearComponent } from './mfootwear.component';

describe('MfootwearComponent', () => {
  let component: MfootwearComponent;
  let fixture: ComponentFixture<MfootwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfootwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
