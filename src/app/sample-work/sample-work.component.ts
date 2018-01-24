import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SamplesService } from '../services/samples.service';

@Component({
  selector: 'app-sample-work',
  templateUrl: './sample-work.component.html',
  styleUrls: ['./sample-work.component.scss']
})
export class SampleWorkComponent implements OnInit {
	@Input() show: boolean;
	@Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
	samples: Array<object> = [];

  constructor(private samplesService: SamplesService) { }
	getSamples(): void {
		this.samples = this.samplesService.getSamples();
	}	

	openCarousel(index) {
		this.show = true;
		this.change.emit(this.show);
	}

	ngOnInit() {
		this.getSamples();
	}

}
