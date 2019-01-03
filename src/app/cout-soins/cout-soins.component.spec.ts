import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutSoinsComponent } from './cout-soins.component';

describe('CoutSoinsComponent', () => {
  let component: CoutSoinsComponent;
  let fixture: ComponentFixture<CoutSoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoutSoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutSoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
