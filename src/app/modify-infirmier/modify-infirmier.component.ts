import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-infirmier',
  templateUrl: './modify-infirmier.component.html',
  styleUrls: ['./modify-infirmier.component.css']
})
export class ModifyInfirmierComponent implements OnInit {
  ajouter = false;
  affecter =false;
  supprimer = false;
  constructor() { }

  ngOnInit() {
  }

  ajoutInf(){
    this.ajouter =true;
  }
}
