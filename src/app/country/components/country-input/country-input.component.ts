import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{

  @Output() onEnter:EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter<string>();

  @Input() placeholder: string = ''

  debouncer: Subject<string> = new Subject<string>();

  termino: string = '';

  // Se dispara una unica vez
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(200))
      .subscribe(value => {
        console.log(value)
        this.onDebounce.emit(value)
    })
  }

  search(){
    this.onEnter.emit( this.termino );
  }

  keyPress( event: any) {
    // const valor = event.target.value;
    // console.log(valor)
    this.debouncer.next( this.termino)
  }
}
