import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfootwearComponent } from './wfootwear.component';

describe('WfootwearComponent', () => {
  let component: WfootwearComponent;
  let fixture: ComponentFixture<WfootwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfootwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
