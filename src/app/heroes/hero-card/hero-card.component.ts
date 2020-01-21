import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero-card',
  template: `
    <ng-container *ngIf="hero">
      <a [routerLink]="['/heroes/hero', hero.id]">
        <img [src]="
              hero.thumbnail.path +
              '/' +
              layout +
              '_' +
              size +
              '.' +
              hero.thumbnail.extension" 
          (load)="loaded = true" />
       {{hero.name}}
      </a>
    </ng-container>
  `,
  styleUrls: ['./hero-card.component.scss'],
  host: {
    '[class.loaded]': 'loaded',
  }
})
export class HeroCardComponent implements OnInit {
  @Input() hero = null;
  loaded = false;
  layout = 'standard';
  size = 'medium';

  constructor() { }

  ngOnInit() {
    console.log(this.hero);
  }

}
