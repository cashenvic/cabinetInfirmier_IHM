import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfirmierComponent } from './add-infirmier.component';

describe('AddInfirmierComponent', () => {
  let component: AddInfirmierComponent;
  let fixture: ComponentFixture<AddInfirmierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInfirmierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInfirmierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
