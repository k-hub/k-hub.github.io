import { Injectable } from '@angular/core';
import { SAMPLES }	from '../samples';

@Injectable()
export class SamplesService {

  constructor() { }

  getSamples(): Object[] {
  	return SAMPLES;
  }
}
