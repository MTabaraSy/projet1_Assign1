import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ClasseComponent } from './Components/classe/classe.component';
import { StudentsComponent } from './Components/students/students.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HearderComponent } from './Shared/hearder/hearder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClasseComponent,
    StudentsComponent,
    FooterComponent,
    HearderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
