import {ActeIdInterface} from './acteid';
import {TypeInterface} from './typeacte';

export interface ActeInterface {
    types: TypeInterface[];
    actes: ActeIdInterface[];
}
