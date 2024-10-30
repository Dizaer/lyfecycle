import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;


  ngOnInit(): void {
    console.log('Componente HIJOOOOOOO AHHH: ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJOOOOOOO AHHH: ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('Componente HIJOOOOOOO AHHH: ngOnDestroy');
  }

}
