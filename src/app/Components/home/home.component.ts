import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import {Classes, deleteClasse, update , Students} from '../../app.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
Classe : any;
delete : any;
update : any;
TableFiltre : any;
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.Classe=Classes;
    this.delete=deleteClasse;
    this.update = update;
  }

   filtre(classee:String){
    if(classee === 'null'){
      this.TableFiltre = Students;
      return;
    }
    this.TableFiltre =Students.filter((student) => classee === student.classe)
  }
 
}
