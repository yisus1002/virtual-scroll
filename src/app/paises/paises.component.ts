import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit{

  paises:any[]=[];

  constructor(
    private http: HttpClient
  ){

  }
  ngOnInit(): void {
    this.http.get(`https://restcountries.com/v3.1/all`).subscribe((data:any)=>{
      this.paises=data
      this.paises.sort((a:any, b: any) => {
        if (a.name.common < b.name.common) {
          return -1;
        }
        if (a.name.common > b.name.common) {
          return 1;
        }
        return 0;
      });
      console.log(this.paises);
      
    } )
  }

  drop(event:CdkDragDrop<any>){
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex)
  }
}
