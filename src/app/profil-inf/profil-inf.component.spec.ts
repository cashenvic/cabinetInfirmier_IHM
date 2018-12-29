import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilInfComponent } from './profil-inf.component';

describe('ProfilInfComponent', () => {
  let component: ProfilInfComponent;
  let fixture: ComponentFixture<ProfilInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
