import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientAffectDialogComponent} from './patient-affect-dialog.component';

describe('PatientAffectDialogComponent', () => {
    let component: PatientAffectDialogComponent;
    let fixture: ComponentFixture<PatientAffectDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PatientAffectDialogComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PatientAffectDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
