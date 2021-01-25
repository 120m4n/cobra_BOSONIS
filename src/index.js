// import "./css/styles.css";
import "ol/ol.css";
import "ol-ext/dist/ol-ext.css";
// Add info on page
// import "./options";
import "./fetch-API";

// Add a map
import map from "./map";

import MousePosition from "ol/control/MousePosition";
import ScaleLine from "ol/control/ScaleLine";

// import VectorLayer from "ol/layer/Vector";
// import VectorSource from "ol/source/Vector";
// import Polygon from "ol/geom/Polygon";
import {Fill, Stroke, Circle, Style} from 'ol/style';
import Point from "ol/geom/Point";
import Feature from 'ol/Feature';
import Select from "ol/interaction/Select";
import Zoom from "ol-ext/featureanimation/Zoom";
import {fromLonLat,toLonLat} from 'ol/proj';
import getAPI from "./fetch-API";

// const vector = new VectorLayer({ source: new VectorSource() });
// map.addLayer(vector);

map.addControl(new ScaleLine());
map.addControl(new MousePosition({
    projection: 'EPSG:4326',
    coordinateFormat: function (coordinate) {
        var zoom = map.getView().getZoom();
        return 'Zoom:' + zoom + ",  " + ol.coordinate.toStringXY(coordinate, 6);
    }
}));

//Variables for
const viewer_360_check = document.getElementById('viewer_360');


// Pulse feature at coord
function pulseFeature(coord){
    var f = new Feature (new Point(coord));
    // console.log(f);
    f.setStyle (new Style({
        image: new Circle ({
          radius: 30, 
          points: 4,
          stroke: new Stroke ({ color: '#FF0000', width:3 })
        })
      }));
    map.animateFeature (f, new Zoom({
    fade: ol.easing.easeOut, 
    duration: 1000, 
    easing: ol.easing[0] 
    }));
};

 // Pulse on click 
 map.on('singleclick', function(evt) {
    pulseFeature(evt.coordinate);
    
    if (viewer_360_check.checked) {

      let lonlat = toLonLat(evt.coordinate);
      getAPI(lonlat[0], lonlat[1])
        .then(response => response.json())
        .then (text => {
          const pole = text[0];
          if (pole['codigoapoyo'] != -1 ){
              // let pole_text = `apoyo: ${pole['codigoapoyo']} ---- ubicacion: ${pole['ubicacion']}`;
              
              let ubicacion_lonlat = (pole['ubicacion']).match(/\((.*)\)/).pop();
              ubicacion_lonlat = ubicacion_lonlat.split(' ');
              // console.log(ubicacion_lonlat)
              // console.log( fromLonLat([parseFloat(ubicacion_lonlat[0]), parseFloat(ubicacion_lonlat[1])]) )
              let zoom = map.getView().zoom;
              map.getView().animate({zoom: zoom}, {center: fromLonLat([parseFloat(ubicacion_lonlat[0]), parseFloat(ubicacion_lonlat[1])])});
          }
        })
        .catch(error => {
          console.log("catch error:", error);
        });
    }
    
  });




