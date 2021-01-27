import VectorTile from "ol/layer/VectorTile";
import VectorTileSource from 'ol/source/VectorTile';
import MVT from "ol/format/MVT";

import {style_apoyos, style_tramomt, style_trafos} from "./styles_layers"



const url_tile_server = 'http://198.58.115.96:8080';
//var url_tile_server = 'http://localhost:8080'

var vtramomt = new VectorTile({
    title: 'Tramos MT',
    source: new VectorTileSource({
        format: new MVT(),
        url: url_tile_server + '/maps/essa/tramomt/{z}/{x}/{y}.pbf'
    }),
    minZoom: 7,
    maxZoom: 20,
    style:  style_tramomt

});

var vapoyo = new VectorTile({
    title: 'Apoyos',
    source: new VectorTileSource({
        format: new MVT(),
        url: url_tile_server + '/maps/essa/apoyos/{z}/{x}/{y}.pbf'
    }),
    minZoom: 17,
    maxZoom: 20,
    style:  style_apoyos

});

var vtrafos = new VectorTile({
    title: 'Trafos',
    source: new VectorTileSource({
        format: new MVT(),
        url: url_tile_server + '/maps/essa/trafos/{z}/{x}/{y}.pbf'
    }),
    minZoom: 17,
    maxZoom: 20,
    style: style_trafos

});

var vsubestacion = new VectorTile({
    title: 'Subestacion',
    source: new VectorTileSource({
        format: new MVT(),
        url: url_tile_server + '/maps/essa/subestacion/{z}/{x}/{y}.pbf'
    }),
    minZoom: 7,
    maxZoom: 20,
    // style: stylesubestacion

});

var vdepartamento = new VectorTile({
    title: 'Area Influencia',
    source: new VectorTileSource({
        format: new MVT(),
        url: url_tile_server + '/maps/essa/departamento/{z}/{x}/{y}.pbf'
    }),
    visible:true,
    minZoom: 6,
    maxZoom: 9,
    // style: styledepartamento

});

// Aqui van los controles del mapa base

// var mapaBase = new ol.layer.Group({
//     title : 'Mapa Base',
//     layers : [raster, vdepartamento, vsubestacion]
// })





export {vtramomt, vapoyo, vtrafos};