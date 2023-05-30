import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
})

export class GmapsComponent implements OnInit, AfterViewInit {
  // @ViewChild('mapRef') mapRef!: GoogleMap;
  @ViewChild(GoogleMap) map: GoogleMap;
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
    console.log("onInit called")
  }

  ngAfterViewInit() {
    console.log('addfeature event fired!');
    this.map.data.setStyle(function (feature) {
      if (feature.getProperty('radius') && feature.getGeometry().getType() === 'Point') {
        return {
          visible: false
        };
      }

      return {

      };
    });

    var btn = document.createElement('input');
    btn.type = 'button';
    btn.value = 'click here to test the geoJson-export';
    google.maps.event.addDomListener(btn, 'click', function () {
      console.log("featured click!");
      //map2.data.forEach(function (f) { map2.data.remove(f); });
      //map.getGeoJson(function (geo) { console.log(map2.data.addGeoJson(geo)); });
    });
    this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(btn);

    var drawingManager = new google.maps.drawing.DrawingManager({
      map: this.map.googleMap,
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
        drawingModes: [
          google.maps.drawing.OverlayType.MARKER,
          google.maps.drawing.OverlayType.POLYGON,
          google.maps.drawing.OverlayType.POLYLINE,
          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.RECTANGLE
        ]
      }
    });

    google.maps.event.addListener(drawingManager, 'overlaycomplete', function (event) {
      switch (event.type) {
        case google.maps.drawing.OverlayType.MARKER:
          this.map.data.add(new google.maps.Data.Feature({ geometry: new google.maps.Data.Point(event.overlay.getPosition()) }));
          break;
        case google.maps.drawing.OverlayType.RECTANGLE:
          var b = event.overlay.getBounds(),
            p = [b.getSouthWest(), { lat: b.getSouthWest().lat(), lng: b.getNorthEast().lng() }, b.getNorthEast(), { lng: b.getSouthWest().lng(), lat: b.getNorthEast().lat() }]
          this.map.data.add(new google.maps.Data.Feature({ geometry: new google.maps.Data.Polygon([p]) }));
          break;
        case google.maps.drawing.OverlayType.POLYGON:
          this.map.data.add(new google.maps.Data.Feature({ geometry: new google.maps.Data.Polygon([event.overlay.getPath().getArray()]) }));
          break;
        case google.maps.drawing.OverlayType.POLYLINE:
          this.map.data.add(new google.maps.Data.Feature({ geometry: new google.maps.Data.LineString(event.overlay.getPath().getArray()) }));
          break;
        case google.maps.drawing.OverlayType.CIRCLE:
          this.map.data.add(new google.maps.Data.Feature({ properties: { radius: event.overlay.getRadius() }, geometry: new google.maps.Data.Point(event.overlay.getCenter()) }));
          break;
      }

    });
  }
}
