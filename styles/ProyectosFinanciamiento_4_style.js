var size = 0;
var placement = 'point';

function financeShape(fill, type) {
    var commonStroke = new ol.style.Stroke({color:'rgba(255,255,255,0.98)', width:2});
    var image;
    if (type === 'square') image = new ol.style.RegularShape({points:4, radius:9, stroke:commonStroke, fill:new ol.style.Fill({color:fill})});
    else if (type === 'diamond') image = new ol.style.RegularShape({points:4, radius:9, angle:Math.PI/4, stroke:commonStroke, fill:new ol.style.Fill({color:fill})});
    else if (type === 'triangle') image = new ol.style.RegularShape({points:3, radius:10, stroke:commonStroke, fill:new ol.style.Fill({color:fill})});
    else if (type === 'hex') image = new ol.style.RegularShape({points:6, radius:9, stroke:commonStroke, fill:new ol.style.Fill({color:fill})});
    else image = new ol.style.Circle({radius:8.5, stroke:commonStroke, fill:new ol.style.Fill({color:fill})});
    return [new ol.style.Style({image:new ol.style.Circle({radius:(image.getRadius ? image.getRadius() : 9)+2.8, fill:new ol.style.Fill({color:'rgba(255,255,255,0.24)'})})}), new ol.style.Style({image:image})];
}

function categories_ProyectosFinanciamiento_4(feature, value) {
    var v = (value || '').toString();
    switch(v) {
        case 'Municipal': return financeShape('rgba(34,118,210,0.92)', 'circle');
        case 'Subdere': return financeShape('rgba(46,164,79,0.92)', 'square');
        case 'Fndr': return financeShape('rgba(125,75,204,0.92)', 'diamond');
        case 'Serviu': return financeShape('rgba(240,140,43,0.92)', 'triangle');
        case 'Ind': return financeShape('rgba(216,75,63,0.92)', 'hex');
        case 'Mixto': return financeShape('rgba(19,167,160,0.92)', 'circle');
        case 'Sin dato': return financeShape('rgba(164,176,190,0.86)', 'circle');
        default: return financeShape('rgba(127,140,141,0.84)', 'circle');
    }
}

function financiamientoFromFeature(feature) {
    var v = feature.get('fuente_fin');
    if (v !== undefined && v !== null && v !== '') return v;
    var t = (feature.get('FINANCIAMI') || '').toString().toUpperCase();
    if (t.indexOf('MUNICIPAL') !== -1 && (t.indexOf('SUBDERE') !== -1 || t.indexOf('FNDR') !== -1 || t.indexOf('SERVIU') !== -1 || t.indexOf('IND') !== -1)) return 'Mixto';
    if (t.indexOf('MUNICIPAL') !== -1 && t.indexOf('SUBDERE') === -1 && t.indexOf('FNDR') === -1 && t.indexOf('SERVIU') === -1 && t.indexOf('IND') === -1) return 'Municipal';
    if (t.indexOf('SUBDERE') !== -1 && t.indexOf('MUNICIPAL') === -1) return 'Subdere';
    if (t.indexOf('FNDR') !== -1 && t.indexOf('MUNICIPAL') === -1) return 'Fndr';
    if (t.indexOf('SERVIU') !== -1 && t.indexOf('MUNICIPAL') === -1) return 'Serviu';
    if (t.indexOf('IND') !== -1 && t.indexOf('MUNICIPAL') === -1) return 'Ind';
    if (!t) return 'Sin dato';
    return 'Otro';
}

var style_ProyectosFinanciamiento_4 = function(feature, resolution){
    return categories_ProyectosFinanciamiento_4(feature, financiamientoFromFeature(feature));
};
