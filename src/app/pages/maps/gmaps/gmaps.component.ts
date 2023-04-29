import { Component, Inject, Renderer2, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
})

export class GmapsComponent implements OnInit {
  readonly zoom = 20;
  readonly position = { lat: -14.226802489673968, lng: -75.70142817721607 };

  options: google.maps.MapOptions = {
    mapTypeId: 'satellite',
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 10,
    disableDefaultUI: true,
  };

  ngOnInit() {
    //throw new Error('Method not implemented.');

  }

}
