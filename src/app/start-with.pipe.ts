import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'startWith'
})
export class StartWithPipe implements PipeTransform {

    transform(value: any[], term: string): any[] {
        return value.filter((x: any) => x.nom.toLowerCase().startsWith(term.toLowerCase()) || x.prenom.toLowerCase()
            .startsWith(term.toLowerCase()));
    }

}
