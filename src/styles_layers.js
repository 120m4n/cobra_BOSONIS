import {Fill, Stroke, Circle, Style, Icon} from 'ol/style';

import {eval_color_by_tension, eval_with_by_tension } from './functions_styles';

import logo from './transformador.svg'


var style_apoyos = new Style({
    image: new Circle({
      radius: 4.0,
      stroke: new Stroke({
        color: 'rgba(0,0,0,1.0)', 
        lineDash: null, 
        lineCap: 'butt', 
        lineJoin: 'miter', 
        width: 0}),
      fill: new Fill({
        color: 'rgba(0,0,0,0.8)'
      })
    })
  });
  
var style_tramomt = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    return [ new Style({
            stroke: new Stroke({
                color: eval_color_by_tension(context),
                width: eval_with_by_tension(context) //resolution > 10 ? 1.5 : 2.0
            })
        })]; 
}; 

var style_trafos =new Style({
    image: new Icon({
    scale: 1,
    src: logo
    })
});

var style_subestacion =   new Style({
  stroke: new Stroke({
    color: 'black',
    width: 2,
  }),
  fill: new Fill({
    color: 'rgb(246, 245, 51 , 0.7)',
  }),
});

var style_departamento =   new Style({
  stroke: new Stroke({
    color: 'blue',
    width: 3,
  }),
  fill: new Fill({
    color: 'rgba(0, 0, 255, 0.1)',
  }),
});

export {style_apoyos, style_tramomt, style_trafos, style_subestacion, style_departamento};