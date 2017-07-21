import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../band.model';
import { BandService } from '../band.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  bands: Band[];

  constructor(
    private _router: Router,
    private _bandService: BandService) { }

  ngOnInit(): void {
    this.bands = this._bandService.getBands();

  }

  goToBandDetail(band: Band) {
    this._router.navigate(['/', band.slug])
  }
}
