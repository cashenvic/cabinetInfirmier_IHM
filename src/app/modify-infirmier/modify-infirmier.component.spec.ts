import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyInfirmierComponent } from './modify-infirmier.component';

describe('ModifyInfirmierComponent', () => {
  let component: ModifyInfirmierComponent;
  let fixture: ComponentFixture<ModifyInfirmierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyInfirmierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyInfirmierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
