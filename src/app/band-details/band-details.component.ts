import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BandService } from '../band.service';
import { Band } from '../band.model';

@Component({
  selector: 'app-band-details',
  templateUrl: './band-details.component.html',
  styleUrls: ['./band-details.component.css']
})
export class BandDetailsComponent implements OnInit {
  @Input() band: Band;
  navigated = false;

  constructor(
    private _bandService: BandService,
    private route: ActivatedRoute) { }

  ngOnInit() {

  }
}

