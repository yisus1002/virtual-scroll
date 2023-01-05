import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.scss']
})
export class VirtualComponent implements OnInit {

  personas:any[]=[];
  tam:number=500;


  @ViewChild(CdkVirtualScrollViewport) viewport!:CdkVirtualScrollViewport;

  constructor() {
    this.random();
   }
  ngOnInit(): void {
    console.log(this.personas);
    
  }
  random(){
    for (let i = 0; i < this.tam;i++){
      this.personas.push((Math.floor(Math.random() * this.tam)))
    }
  }

  irFinal(){
    this.viewport.scrollToIndex(this.personas.length);
  }
  irInicio(){
    this.viewport.scrollToIndex(0);
  }
  irMedio(){
    this.viewport.scrollToIndex(this.personas.length/2);
  }


}
