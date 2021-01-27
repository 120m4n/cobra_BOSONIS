import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import {fromLonLat} from 'ol/proj';
import Attribution from 'ol/control/Attribution';
import {defaults} from 'ol/control';
import {Group as LayerGroup} from 'ol/layer';

import {vtramomt, vapoyo, vtrafos} from './layers';


const vectorOverlays = new LayerGroup({
  title: 'Detalles',
  layers: [vtrafos ]
})


const attribution = new Attribution({
    collapsible: true,
});

/* Create a new map */
const map = new Map({
  target: "map",
  controls: defaults({attribution:false}).extend([ attribution]),
  view: new View({
    center:fromLonLat([-74.5315,10.9993]), //coordinates the map will center on initially
    maxZoom: 20,
    zoom: 10
  }),
  layers: [
    new Tile({
      title: 'OSM',
      type: 'base',
      visible: true,
      source: new OSM()
    }), 
    vectorOverlays
  ]
});

var sidebar = new ol.control.Sidebar({ element: 'sidebar', position: 'left' });

map.addControl(sidebar);
export default map;