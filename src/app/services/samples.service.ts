import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { SAMPLES }	from '../samples';

@Injectable()
export class SamplesService {

  constructor() { }

  getSamples(): Observable<Array<object>> {
  	return of(SAMPLES);
  }
}
