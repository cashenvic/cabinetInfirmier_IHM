import { Component, OnInit, ViewChild } from '@angular/core';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-infirmier',
  templateUrl: './add-infirmier.component.html',
  styleUrls: ['./add-infirmier.component.css']
})
export class AddInfirmierComponent implements OnInit {
  @ViewChild('formulaire') formulaire: NgForm;
    sexe: string;

    infirmier: InfirmierInterface;

    constructor() {
    }

    ngOnInit() {
    }

}
