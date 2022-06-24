import { Component, OnInit } from '@angular/core';
import { Classes, Students } from 'src/app/app.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  NomPrenom ="";
  Classe :any;
  
  constructor() { }

  ngOnInit(): void {
    this.Classe=Classes;
  }

  addStudent(){
    const lastIndex = Students.length-1;
    const ID =Students[lastIndex].id +1;
    Students.push({id:ID, nomprenom:this.NomPrenom, classe:this.Classe});
  }

}
