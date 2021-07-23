import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as OpenSeadragon from 'openseadragon';
import * as Annotorious from '@recogito/annotorious-openseadragon';
import { SELECT } from './widgets/select';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  url: any = 'https://recogito.github.io/images/640px-Hallstatt.jpg';
  @ViewChild('ref') ref!: ElementRef;
  viewer: any;
  annotorius: any;
  constructor() { }

  ngOnInit(){
   
  }

  ngAfterViewInit() {

    setTimeout(()=>{
      this.initOpenSeadragon();

    })
  }
  initOpenSeadragon() {
     const tileSources = {
      type: "image",
      url: this.url
    };
    this.viewer = OpenSeadragon({
      element: this.ref.nativeElement,
      prefixUrl: "assets/openseadragon/",
      panHorizontal: true,
      // defaultZoomLevel: 0,
      // homeFillsViewer: true,
      minZoomLevel: 0,
      maxZoomLevel: 10,
      visibilityRatio: 0,
      tileSources: tileSources,
      degrees: 0,
      showRotationControl: true,
    });
    this.initAnnotorius();
  }
  initAnnotorius() {
    const widget = {widget:SELECT, options:['Alpha', 'Beta', 'Gamma']};
    this.annotorius = Annotorious(this.viewer, { widgets: [widget] });

  }
}
