var size = 0;
var placement = 'point';

function getMontoRadius(feature) {
    var monto = parseFloat(feature.get('MONTO'));
    if (isNaN(monto) || monto <= 0) return 5;
    var stats = window.projectMontoStats || {};
    var min = (typeof stats.min === 'number') ? stats.min : 6800000;
    var max = (typeof stats.max === 'number') ? stats.max : 1736788900;
    var t = (monto - min) / (max - min);
    t = Math.max(0, Math.min(1, t));
    return 5 + (Math.sqrt(t) * 17);
}

var style_ProyectosProporcional_7 = function(feature, resolution){
    var radius = getMontoRadius(feature);
    return [
    new ol.style.Style({
        image: new ol.style.Circle({
            radius: radius + 2,
            fill: new ol.style.Fill({color: 'rgba(255,255,255,0.20)'})
        })
    }),
    new ol.style.Style({
        image: new ol.style.Circle({
            radius: radius,
            stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.96)', width: 2}),
            fill: new ol.style.Fill({color: 'rgba(22, 73, 137, 0.48)'})
        })
    }),
    new ol.style.Style({
        image: new ol.style.Circle({
            radius: Math.max(2.8, radius * 0.42),
            fill: new ol.style.Fill({color: 'rgba(10, 55, 106, 0.96)'})
        })
    })
    ];
};
