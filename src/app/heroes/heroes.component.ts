import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { pluck, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  private dead$ = new Subject<any>();
  heroes$ = this.heroService.heroes$;
  page: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private heroService: HeroService) { }

  ngOnInit() { 
    this.route.params.pipe(
      takeUntil(this.dead$),
      pluck('page')
    ).subscribe(p => {
      if(!p) {
        this.page = 0;
      } else {
        this.page = p;
        if(p == 0) {
          this.heroService.setPage(1);
        } else {
          this.heroService.setPage(p);
        }
      }
    });
  }

  next() {
    this.page++;
    this.heroService.setPage(this.page);
  }

  back() {
    if(this.page > 0) {
      this.page--; 
    }
    this.heroService.setPage(this.page);
  }

  ngOnDestroy() {
    this.dead$.next()
    this.dead$.complete();
  }
}
