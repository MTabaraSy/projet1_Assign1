import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClasseComponent } from 'src/app/Components/classe/classe.component';
import { StudentsComponent } from 'src/app/Components/students/students.component';


@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss']
})
export class HearderComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  openAddClass(){
    this.dialogRef.open(ClasseComponent);
  }
  openAddStudent(){
    this.dialogRef.open(StudentsComponent);
  }

}
