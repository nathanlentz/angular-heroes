import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap } from 'rxjs/operators';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroId$ = this.route.params.pipe(
    pluck('id')
  );

  hero$ = this.heroId$.pipe(
    switchMap(id => {
      return this.heroService.getHeroDetail(id);
    })
  )

  constructor(
    private route: ActivatedRoute, 
    private heroService: HeroService) { }

  ngOnInit() { }
}
