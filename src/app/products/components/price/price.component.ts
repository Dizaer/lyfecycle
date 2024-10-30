import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;


  ngOnInit(): void {
    console.log('Componente HIJOOOOOOO AHHH: ngOnInit');
    this.interval$ = interval(1000).subscribe( value => console.log(`Contador de muertes causadas por Temach: ${value}`) )
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJOOOOOOO AHHH: ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('Componente HIJOOOOOOO AHHH: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
