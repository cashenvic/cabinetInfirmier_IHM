import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogIComponent } from './log-i.component';

describe('LogIComponent', () => {
  let component: LogIComponent;
  let fixture: ComponentFixture<LogIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
