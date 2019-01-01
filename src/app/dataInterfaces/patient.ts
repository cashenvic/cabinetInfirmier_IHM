import {sexeEnum} from "./sexe";
import {Adresse} from "./adresse";
import {VisiteInterface} from './visite';

export interface PatientInterface {
 prenom: string;
 nom: string;
 sexe: sexeEnum;
    naissance: string;
 numeroSecuriteSociale: string;
 adresse: Adresse;
 visite: VisiteInterface;
}
