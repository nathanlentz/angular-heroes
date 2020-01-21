import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

import { environment} from '../../environments/environment';
import { BehaviorSubject, combineLatest } from 'rxjs';

const HEROES_API = `${environment.MARVEL_API.URL}/v1/public/characters`;

const LIMIT_LOW = 10;

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private pageBS = new BehaviorSubject(0);

  page$ = this.pageBS.asObservable();

  combined = combineLatest(this.page$);

  heroes$ = this.combined.pipe(
    switchMap(([page]) => {
      console.log(page);
      const params = {
        apikey: environment.MARVEL_API.PUBLIC_KEY,
        offset: `${page * LIMIT_LOW}`,
        limit: `${LIMIT_LOW}`,
      }

      return this.http.get(HEROES_API, {
        params
      });
    }),
    map((res: any) => res.data.results),
  );

  // heroes$ = this.http.get(HEROES_API, {
  //   params: {
  //       apikey: environment.MARVEL_API.PUBLIC_KEY,
  //       offset: `${0}`,
  //       limit: `${LIMIT_LOW}`,
  //   }
  // })
  // .pipe(map((res: any) => res.data.results));

  constructor(private http: HttpClient) { }

  getHeroDetail(id: any) {
    return this.http.get(HEROES_API + '/' + id, {
      params: {
        apikey: environment.MARVEL_API.PUBLIC_KEY
      }
    })
    .pipe(map((res: any) => {
        return res.data.results[0];
    }));
  }

  setPage(number: any) {
    this.pageBS.next(number);
  }
}
