import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SamplesService } from '../services/samples.service';

@Component({
  selector: 'app-sample-work',
  templateUrl: './sample-work.component.html',
  styleUrls: ['./sample-work.component.scss']
})
export class SampleWorkComponent implements OnInit {
	samples: Array<object> = [];
	groupName: string = 'carousel';

  constructor(private samplesService: SamplesService) { }	
    getSamples() {
	    this.samplesService.getSamples().subscribe(samples => this.samples = samples);
	}

	ngOnInit() {
		this.getSamples();
	}
}