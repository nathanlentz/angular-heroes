import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HeroesComponent } from "./heroes.component";
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { 
    path: "", 
    component: HeroesComponent 
  },
  {
    path: ":page",
    component: HeroesComponent
  },
  {
    path: "hero/:id",
    component: HeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
