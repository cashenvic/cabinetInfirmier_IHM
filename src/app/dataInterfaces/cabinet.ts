import {InfirmierInterface} from "./infirmier";
import {PatientInterface} from "./patient";
import {Adresse} from "./adresse";

export interface CabinetInterface { 
 nom: string,
 adresse: Adresse;
 infirmiers: InfirmierInterface[];
 patientsNonAffectes: PatientInterface[];
}
