import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  mainMenu:{
    defaultOptions:Array<any>, accessLink:Array<any>
  } = { defaultOptions:[], accessLink:[] }

  customOptions:Array<any> = []

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/'] //Raiz
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/','history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/','favorites']
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil uil-thumbs-up'
      }
    ]

    this.customOptions = [
      {
        name: 'Lista 1',
        router: ['/']
      },
      {
        name: 'Lista 2',
        router: ['/']
      },
      {
        name: 'Lista 3',
        router: ['/']
      },
      {
        name: 'Lista 4',
        router: ['/']
      }
    ]
  }

}
