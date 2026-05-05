var size = 0;
var placement = 'point';

function stateShape(fill, type) {
    var commonStroke = new ol.style.Stroke({color:'rgba(255,255,255,0.98)', width:2});
    var image;
    if (type === 'triangle') image = new ol.style.RegularShape({points:3, radius:10, stroke:commonStroke, fill:new ol.style.Fill({color:fill})});
    else if (type === 'diamond') image = new ol.style.RegularShape({points:4, radius:9, angle:Math.PI/4, stroke:commonStroke, fill:new ol.style.Fill({color:fill})});
    else if (type === 'square') image = new ol.style.RegularShape({points:4, radius:9, stroke:commonStroke, fill:new ol.style.Fill({color:fill})});
    else image = new ol.style.Circle({radius:8.5, stroke:commonStroke, fill:new ol.style.Fill({color:fill})});
    return [new ol.style.Style({image:new ol.style.Circle({radius:(image.getRadius ? image.getRadius() : 9)+2.8, fill:new ol.style.Fill({color:'rgba(255,255,255,0.25)'})})}), new ol.style.Style({image:image})];
}

function categories_ProyectosEstadoproyecto_5(feature, value) {
    var v = (value || '').toString();
    switch(v) {
        case 'Terminado': return stateShape('rgba(47,180,99,0.94)', 'circle');
        case 'En ejecucion': return stateShape('rgba(243,198,35,0.95)', 'triangle');
        case 'En diseño': return stateShape('rgba(52,152,219,0.94)', 'diamond');
        case 'En licitacion/adjudicacion': return stateShape('rgba(142,89,209,0.94)', 'square');
        case 'En tramite': return stateShape('rgba(240,140,43,0.95)', 'circle');
        case 'En liquidacion': return stateShape('rgba(127,140,141,0.92)', 'square');
        case 'En presupuesto': return stateShape('rgba(52, 120, 219,0.90)', 'square');
        case 'Propuesta a financiar': return stateShape('rgba(231,76,60,0.92)', 'diamond');
        case 'Sin estado': return stateShape('rgba(189,195,199,0.9)', 'circle');
        default: return stateShape('rgba(120,132,145,0.84)', 'circle');
    }
}

function estadoFromFeature(feature) {
    var v = feature.get('estado_simple');
    if (v !== undefined && v !== null && v !== '') return v;
    var t = (feature.get('ESTADO') || '').toString().toUpperCase();
    if (!t) return 'Sin estado';
    if (t.indexOf('TERMINAD') !== -1 || t.indexOf('RECEPCION') !== -1 || t.indexOf('RECEPCIONES') !== -1 || t.indexOf('ADQUIRIDO') !== -1 || t.indexOf('ADQUIRIDA') !== -1) return 'Terminado';
    if (t.indexOf('EJECUCION') !== -1 || t.indexOf('EJECUCIÓN') !== -1) return 'En ejecucion';
    if (t.indexOf('DISENO') !== -1 || t.indexOf('DISEÑO') !== -1) return 'En diseño';
    if (t.indexOf('ADJUDICACION') !== -1 || t.indexOf('ADJUDICACIÓN') !== -1 || t.indexOf('LICITACION') !== -1 || t.indexOf('LICITACIÓN') !== -1 || t.indexOf('SELECCION') !== -1 || t.indexOf('SELECCIÓN') !== -1) return 'En licitacion/adjudicacion';
    if (t.indexOf('TRAMITACION') !== -1 || t.indexOf('TRAMITACIÓN') !== -1 || t.indexOf('CONVENIO') !== -1) return 'En tramite';
    if (t.indexOf('LIQUIDACION') !== -1 || t.indexOf('LIQUIDACIÓN') !== -1) return 'En liquidacion';
    if (t.indexOf('PRESUPUESTO') !== -1) return 'En presupuesto';
    if (t.indexOf('PROPUESTA') !== -1 && t.indexOf('FINANCIAR') !== -1) return 'Propuesta a financiar';
    return 'Otro';
}

var style_ProyectosEstadoproyecto_5 = function(feature, resolution){
    return categories_ProyectosEstadoproyecto_5(feature, estadoFromFeature(feature));
};
