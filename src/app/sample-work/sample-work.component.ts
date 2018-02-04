import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
import { SamplesService } from '../services/samples.service';

@Component({
  selector: 'app-sample-work',
  templateUrl: './sample-work.component.html',
  styleUrls: ['./sample-work.component.scss']
})
export class SampleWorkComponent implements OnInit {
	samples: Array<object> = [];
	groupName: string = 'carousel';
	mobile: boolean = false;

	@HostListener('window:resize', ['$event'])
	onResize($event) {
		this.getWindowSize();
	}

  	constructor(private samplesService: SamplesService) { }	
    
    getSamples() {
	    this.samplesService.getSamples().subscribe(samples => this.samples = samples);
	}

	getWindowSize() {
		if (window.innerWidth < 500) {
			this.mobile = true;
		} else {
			this.mobile = false;
		}
	}

	ngOnInit() {
		this.getWindowSize();

		this.getSamples();
	}
}