import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Classes} from '../../app.component'


@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  Nom ="";
  Nombre = "";
  Prof="";
  title = "Ajouter une nouvelle classe";
  constructor() { }

  ngOnInit(): void {
  }
  addClasse(){
    const lastIndex = Classes.length-1;
    const ID =Classes[lastIndex].id +1;
    Classes.push({id:ID, nom:this.Nom, nmbreMax:this.Nombre,professeurResponsabl:this.Prof});
  }

 
  

}
