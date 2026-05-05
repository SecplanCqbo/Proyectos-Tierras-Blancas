var size = 0;
var placement = 'point';

function budgetStyle(fill, halo) {
    return [
        new ol.style.Style({
            image: new ol.style.Circle({
                radius: 11,
                fill: new ol.style.Fill({color: halo})
            })
        }),
        new ol.style.Style({
            image: new ol.style.Circle({
                radius: 7.5,
                stroke: new ol.style.Stroke({color:'rgba(255,255,255,0.98)', width:2}),
                fill: new ol.style.Fill({color: fill})
            })
        })
    ];
}

function categories_ProyectosTierrasBlancas14042026_6(feature, value) {
    var v = (value || '').toString();
    switch(v) {
        case 'CON RECURSOS': return budgetStyle('rgba(46,164,79,0.96)', 'rgba(46,164,79,0.18)');
        case 'EN PRESUPUESTO': return budgetStyle('rgba(243,156,18,0.96)', 'rgba(243,156,18,0.18)');
        case 'PROPUESTA A FINANCIAR': return budgetStyle('rgba(231,76,60,0.96)', 'rgba(231,76,60,0.18)');
        default: return budgetStyle('rgba(149,165,166,0.9)', 'rgba(149,165,166,0.16)');
    }
}

var style_ProyectosTierrasBlancas14042026_6 = function(feature, resolution){
    return categories_ProyectosTierrasBlancas14042026_6(feature, feature.get('TEMATICA'));
};
