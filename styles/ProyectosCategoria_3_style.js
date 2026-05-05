var size = 0;
var placement = 'point';

function halo(radius) {
    return new ol.style.Style({
        image: new ol.style.Circle({
            radius: radius + 3,
            fill: new ol.style.Fill({color: 'rgba(255,255,255,0.28)'})
        })
    });
}

function shape(fill, type) {
    var img;
    if (type === 'triangle') {
        img = new ol.style.RegularShape({points:3, radius:10, rotation:0, stroke:new ol.style.Stroke({color:'rgba(255,255,255,0.98)', width:2}), fill:new ol.style.Fill({color:fill})});
    } else if (type === 'diamond') {
        img = new ol.style.RegularShape({points:4, radius:9, radius2:9, angle:Math.PI/4, stroke:new ol.style.Stroke({color:'rgba(255,255,255,0.98)', width:2}), fill:new ol.style.Fill({color:fill})});
    } else if (type === 'hex') {
        img = new ol.style.RegularShape({points:6, radius:9, stroke:new ol.style.Stroke({color:'rgba(255,255,255,0.98)', width:2}), fill:new ol.style.Fill({color:fill})});
    } else if (type === 'square') {
        img = new ol.style.RegularShape({points:4, radius:9, angle:0, stroke:new ol.style.Stroke({color:'rgba(255,255,255,0.98)', width:2}), fill:new ol.style.Fill({color:fill})});
    } else {
        img = new ol.style.Circle({radius:8.5, stroke:new ol.style.Stroke({color:'rgba(255,255,255,0.98)', width:2}), fill:new ol.style.Fill({color:fill})});
    }
    return [halo(img.getRadius ? img.getRadius() : 9), new ol.style.Style({image: img})];
}

function categories_ProyectosCategoria_3(feature, value) {
    var v = (value || '').toString();
    switch(v) {
        case 'Areas verdes y recreacion': return shape('rgba(70,183,106,0.92)', 'square');
        case 'Infraestructura deportiva': return shape('rgba(45,143,221,0.94)', 'triangle');
        case 'Equipamiento comunitario': return shape('rgba(243,156,18,0.94)', 'square');
        case 'Vialidad y movilidad': return shape('rgba(142,89,209,0.94)', 'circle');
        case 'Seguridad': return shape('rgba(231,76,60,0.95)', 'diamond');
        case 'Infraestructura hidraulica': return shape('rgba(24,183,176,0.94)', 'hex');
        case 'Salud': return shape('rgba(108,122,137,0.94)', 'circle');
        default: return shape('rgba(127,140,141,0.88)', 'circle');
    }
}

function categoriaFromFeature(feature) {
    var v = feature.get('categoria');
    if (v !== undefined && v !== null && v !== '') return v;
    var t = (feature.get('INICIATIVA') || '').toString().toUpperCase();
    if (t.indexOf('CESFAM') !== -1 || t.indexOf('SALUD') !== -1 || t.indexOf('POSTA') !== -1) return 'Salud';
    if (t.indexOf('CAMARA') !== -1 || t.indexOf('CAMARAS') !== -1 || t.indexOf('TELEPROTECCION') !== -1 || t.indexOf('PORTICO') !== -1 || t.indexOf('LECTURA DE PATENTES') !== -1 || t.indexOf('RETEN') !== -1 || t.indexOf('SUBCOMISARIA') !== -1 || t.indexOf('TELEVIGILANCIA') !== -1 || t.indexOf('SEGURIDAD') !== -1) return 'Seguridad';
    if (t.indexOf('PAVIMENTACION') !== -1 || t.indexOf('REPAVIMENTACION') !== -1 || t.indexOf('VEREDAS') !== -1 || t.indexOf('CALLE') !== -1 || t.indexOf('PASAJE') !== -1 || t.indexOf('AVENIDA') !== -1 || t.indexOf('ACERAS') !== -1) return 'Vialidad y movilidad';
    if (t.indexOf('AGUAS LLUVIAS') !== -1 || t.indexOf('DRENAJE') !== -1 || t.indexOf('ALCANTARILLADO') !== -1) return 'Infraestructura hidraulica';
    if (t.indexOf('GIMNASIO') !== -1 || t.indexOf('MULTICANCHA') !== -1 || t.indexOf('CANCHA') !== -1 || t.indexOf('CANCHAS') !== -1 || t.indexOf('SINTETICA') !== -1 || t.indexOf('SINTETICAS') !== -1 || t.indexOf('CALISTENIA') !== -1 || t.indexOf('SKATEPARK') !== -1 || t.indexOf('CENDYR') !== -1 || t.indexOf('TECHADO') !== -1 || t.indexOf('SOMBREADERO') !== -1) return 'Infraestructura deportiva';
    if (t.indexOf('PLAZA') !== -1 || t.indexOf('PARQUE') !== -1 || t.indexOf('AREA VERDE') !== -1 || t.indexOf('AREAS VERDES') !== -1 || t.indexOf('JUEGOS') !== -1 || t.indexOf('RIEGO') !== -1 || t.indexOf('BOSQUE') !== -1 || t.indexOf('ESPACIO PUBLICO') !== -1 || t.indexOf('EEPP') !== -1) return 'Areas verdes y recreacion';
    if (t.indexOf('SEDE') !== -1 || t.indexOf('CENTRO CULTURAL') !== -1 || t.indexOf('DELEGACION') !== -1 || t.indexOf('EDIFICIO') !== -1 || t.indexOf('GALPON') !== -1 || t.indexOf('EQUIPAMIENTO') !== -1 || t.indexOf('CENTRO COMUNITARIO') !== -1) return 'Equipamiento comunitario';
    return 'Otros';
}

var style_ProyectosCategoria_3 = function(feature, resolution){
    return categories_ProyectosCategoria_3(feature, categoriaFromFeature(feature));
};
