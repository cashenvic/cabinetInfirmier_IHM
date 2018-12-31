import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSComponent } from './log-s.component';

describe('LogSComponent', () => {
  let component: LogSComponent;
  let fixture: ComponentFixture<LogSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
