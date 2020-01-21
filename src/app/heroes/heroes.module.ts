import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './hero/hero.component';
import { HeroCardComponent } from './hero-card/hero-card.component';

@NgModule({
  declarations: [HeroesComponent, HeroComponent, HeroCardComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
