import { EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  // Variable obtenida del ngModel desde el HTML
  src: string = ''
  constructor() { }

  ngOnInit(): void {
  }
  // Llamada a la funcion cada que cambie el ngModel con ngModelChage
  callSearch(term: String): void {
    if (term.length >= 3) {
      this.callbackData.emit(term)
    }
  }
}
