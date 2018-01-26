import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SamplesService } from '../services/samples.service';

@Component({
  selector: 'app-sample-work',
  templateUrl: './sample-work.component.html',
  styleUrls: ['./sample-work.component.scss']
})
export class SampleWorkComponent implements OnInit {
	@Input() show: boolean;
	@Output() change: EventEmitter<object> = new EventEmitter<object>();
	samples: Array<object> = [];

  constructor(private samplesService: SamplesService) { }

	getSamples(): void {
		this.samplesService.getSamples().subscribe(samples => this.samples = samples);
	}	

	openCarousel(index) {
		this.show = true;

		// Emit to parent to open carousel along with start index of carousel
		this.change.emit({ show: this.show, carouselStartIndex: index });
	}

	ngOnInit() {
		this.getSamples();
	}

}
