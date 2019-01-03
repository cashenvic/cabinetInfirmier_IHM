import { Component, OnInit, Input } from '@angular/core';
import { ActeMedicalService } from '../services/acte-medical.service';

export interface dataInterface {    
  id : string;
  type : string;
  libelle : string;
  cout : number;
}

@Component({
  selector: 'app-cout-soins',
  templateUrl: './cout-soins.component.html',
  styleUrls: ['./cout-soins.component.css']
})
export class CoutSoinsComponent implements OnInit {
 @Input() acteSoin : Array<string>;
  total : number = 0.0;    

  dataActePatient : Array<dataInterface> = [];  
  displayedColumns: string[] = ['acteId', 'type', 'libelle', 'cout'];
    
  constructor(private actesService: ActeMedicalService) { }

  ngOnInit() {
    //console.log('actes du patient : '+this.acteSoin);

    let unSoin :  dataInterface = {
      id : "",
      type : "",
      libelle : "",
      cout : 0.0,
    };

    this.acteSoin.forEach( element => {    
      unSoin.id = this.actesService.getActesbyId(element).id;      
      unSoin.type = this.actesService.getActesbyId(element).type;
      unSoin.libelle = this.actesService.getActesbyId(element).nom;   

      let coef = this.actesService.getActesbyId(element).coef;
      let cle = this.actesService.getActesbyId(element).cle;
      let cout = this.actesService.facture(coef,cle);
      unSoin.cout = cout;
     
      this.total += (+cout);

      this.dataActePatient.push(unSoin);
    });  
    //console.log(' cout : '+this.total);     
  }

 


}
