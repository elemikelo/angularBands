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
  bands: Band[];
  slug;
  bandSelected;
  private sub: any;
  bandArray: Band[];
  // bandSelected;

  constructor(
    private _bandService: BandService,
    private _route: ActivatedRoute) { }

  ngOnInit() {

    this.bandArray = this._bandService.getBands();

    this.sub = this._route.params.subscribe(params => {
      this.slug = params['slug']
      console.log(this.slug)
    });

    let obj = this.bandArray.find(x => x.slug === this.slug);
    let index = this.bandArray.indexOf(obj);
    this.bandArray.fill(obj.slug = this.slug, index, index++);

    this.bandSelected = obj



  }
}
