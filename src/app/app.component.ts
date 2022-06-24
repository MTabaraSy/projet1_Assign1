import { Component } from '@angular/core';
import { ClasseComponent } from './Components/classe/classe.component';

export const Classes = [
  { id:1, nom:'Second S', nmbreMax:'40', professeurResponsabl : 'Mr Babacar Mbaye Faye'},
  { id:2, nom:'Terminal S2', nmbreMax:'30', professeurResponsabl : 'Mr Serigne Mbacké Diakhaté'},
  { id:3, nom:'Terminal L2', nmbreMax:'30', professeurResponsabl : 'Mme Fatou Ka'},
  { id:4, nom:'Première L1', nmbreMax:'30', professeurResponsabl : 'Mme Aminata Ndiaye'},
  { id:5, nom:'Second L', nmbreMax:'50', professeurResponsabl : 'Mr Malick Thioune'},

];
export const Students = [
  {id:1, nomprenom : 'Penda Faye', classe:'Terminale S2'},
  {id:2, nomprenom:'Fatou Ndiaye', classe:'Second L'},
  {id:2, nomprenom:'Rouguie Diallo', classe:'Second L'},
  {id:2, nomprenom:'Mamadou Sow', classe:'Première L1'},
  {id:2, nomprenom:'Mouhamed Diouf', classe:'Terminale L2'},
  {id:2, nomprenom:'Souleymane Ben', classe:'Terminale S2'},
  {id:2, nomprenom:'Sokhna Dia', classe:'Second S'},
]
export function  deleteClasse(id: number){
  const classIndex = Classes.findIndex((classe)=>classe.id===id)
  Classes.splice(classIndex, 1);
  
}
// export function addClasse(){
//   const lastIndex = Classes.length -1;
//   const ID =Classes[lastIndex].id +1;
//   Classes.push({id:ID, nom:Nom, nmbreMax:Nombre,professeurResponsabl:Prof});
// }

export function update(id:number, newData:any){ 
  const index =Classes.findIndex((Classe)=>Classe.id===id)
  Classes.splice(index, 1, newData);
}





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment1';
  

  constructor(){

  }
  
  
 
 
}
