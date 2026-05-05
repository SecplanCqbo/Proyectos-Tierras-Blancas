var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_CartoBasemap_1 = new ol.layer.Tile({
            'title': 'Carto Basemap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png'
            })
        });
var format_SectorTierrasBlancas_2 = new ol.format.GeoJSON();
var features_SectorTierrasBlancas_2 = format_SectorTierrasBlancas_2.readFeatures(json_SectorTierrasBlancas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectorTierrasBlancas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectorTierrasBlancas_2.addFeatures(features_SectorTierrasBlancas_2);
var lyr_SectorTierrasBlancas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectorTierrasBlancas_2, 
                style: style_SectorTierrasBlancas_2,
                popuplayertitle: 'Sector Tierras Blancas',
                interactive: false,
                title: '<img src="styles/legend/SectorTierrasBlancas_2.png" /> Sector Tierras Blancas'
            });
var format_ProyectosCategoria_3 = new ol.format.GeoJSON();
var features_ProyectosCategoria_3 = format_ProyectosCategoria_3.readFeatures(json_ProyectosCategoria_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectosCategoria_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectosCategoria_3.addFeatures(features_ProyectosCategoria_3);
var lyr_ProyectosCategoria_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProyectosCategoria_3, 
                style: style_ProyectosCategoria_3,
                popuplayertitle: 'Proyectos por categoría',
                interactive: true,
    title: 'Proyectos por categoría<span class="layer-legend"><span class="legend-swatch legend-square" style="background:#46b76a"></span>Áreas verdes<br><span class="legend-triangle" style="border-bottom-color:#2d8fdd"></span>Infraestructura deportiva<br><span class="legend-swatch legend-square" style="background:#f39c12"></span>Equipamiento comunitario<br><span class="legend-swatch legend-circle" style="background:#8e59d1"></span>Vialidad y movilidad<br><span class="legend-swatch legend-diamond" style="background:#e74c3c"></span>Seguridad<br><span class="legend-swatch legend-square" style="background:#18b7b0"></span>Infraestructura hidráulica<br><span class="legend-swatch legend-circle" style="background:#6c7a89"></span>Salud</span>' });
var format_ProyectosFinanciamiento_4 = new ol.format.GeoJSON();
var features_ProyectosFinanciamiento_4 = format_ProyectosFinanciamiento_4.readFeatures(json_ProyectosFinanciamiento_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectosFinanciamiento_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectosFinanciamiento_4.addFeatures(features_ProyectosFinanciamiento_4);
var lyr_ProyectosFinanciamiento_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProyectosFinanciamiento_4, 
                style: style_ProyectosFinanciamiento_4,
                popuplayertitle: 'Proyectos por financiamiento',
                interactive: true,
    title: 'Proyectos por financiamiento<span class="layer-legend"><span class="legend-swatch legend-circle" style="background:#2276d2"></span>Municipal<br><span class="legend-swatch legend-square" style="background:#2ea44f"></span>Subdere<br><span class="legend-swatch legend-diamond" style="background:#7d4bcc"></span>FNDR<br><span class="legend-triangle" style="border-bottom-color:#f08c2b"></span>Serviu<br><span class="legend-swatch legend-square" style="background:#d84b3f"></span>IND<br><span class="legend-swatch legend-circle" style="background:#13a7a0"></span>Mixto</span>' });
var format_ProyectosEstadoproyecto_5 = new ol.format.GeoJSON();
var features_ProyectosEstadoproyecto_5 = format_ProyectosEstadoproyecto_5.readFeatures(json_ProyectosEstadoproyecto_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectosEstadoproyecto_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectosEstadoproyecto_5.addFeatures(features_ProyectosEstadoproyecto_5);
var lyr_ProyectosEstadoproyecto_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProyectosEstadoproyecto_5, 
                style: style_ProyectosEstadoproyecto_5,
                popuplayertitle: 'Proyectos por estado',
                interactive: true,
    title: 'Proyectos por estado<span class="layer-legend"><span class="legend-swatch legend-circle" style="background:#2fb463"></span>Terminado<br><span class="legend-triangle" style="border-bottom-color:#f3c623"></span>En ejecución<br><span class="legend-swatch legend-diamond" style="background:#3498db"></span>En diseño<br><span class="legend-swatch legend-square" style="background:#8e59d1"></span>Licitación / adjudicación<br><span class="legend-swatch legend-circle" style="background:#f08c2b"></span>En trámite<br><span class="legend-swatch legend-square" style="background:#7f8c8d"></span>En liquidación<br><span class="legend-swatch legend-square" style="background:#3478db"></span>En presupuesto<br><span class="legend-swatch legend-diamond" style="background:#e74c3c"></span>Propuesta a financiar</span>' });
var format_ProyectosTierrasBlancas14042026_6 = new ol.format.GeoJSON();
var features_ProyectosTierrasBlancas14042026_6 = format_ProyectosTierrasBlancas14042026_6.readFeatures(json_ProyectosTierrasBlancas14042026_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectosTierrasBlancas14042026_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectosTierrasBlancas14042026_6.addFeatures(features_ProyectosTierrasBlancas14042026_6);
var lyr_ProyectosTierrasBlancas14042026_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProyectosTierrasBlancas14042026_6, 
                style: style_ProyectosTierrasBlancas14042026_6,
                popuplayertitle: 'Proyectos por prioridad financiera',
                interactive: true,
    title: 'Proyectos por prioridad financiera<span class="layer-legend"><span class="legend-swatch legend-circle" style="background:#2ea44f"></span>Con recursos<br><span class="legend-swatch legend-circle" style="background:#f39c12"></span>En presupuesto<br><span class="legend-swatch legend-circle" style="background:#e74c3c"></span>Propuesta a financiar</span>' });
var format_ProyectosProporcional_7 = new ol.format.GeoJSON();
var features_ProyectosProporcional_7 = format_ProyectosProporcional_7.readFeatures(json_ProyectosProporcional_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectosProporcional_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectosProporcional_7.addFeatures(features_ProyectosProporcional_7);
var lyr_ProyectosProporcional_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProyectosProporcional_7, 
                style: style_ProyectosProporcional_7,
                popuplayertitle: 'Inversión proporcional',
                interactive: true,
                title: 'Inversión proporcional<span class="layer-legend"><span class="legend-swatch legend-circle" style="background:rgba(22,73,137,.65)"></span>Tamaño según monto</span>'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_CartoBasemap_1.setVisible(true);lyr_SectorTierrasBlancas_2.setVisible(true);lyr_ProyectosCategoria_3.setVisible(false);lyr_ProyectosFinanciamiento_4.setVisible(false);lyr_ProyectosEstadoproyecto_5.setVisible(false);lyr_ProyectosTierrasBlancas14042026_6.setVisible(false);lyr_ProyectosProporcional_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CartoBasemap_1,lyr_SectorTierrasBlancas_2,lyr_ProyectosCategoria_3,lyr_ProyectosFinanciamiento_4,lyr_ProyectosEstadoproyecto_5,lyr_ProyectosTierrasBlancas14042026_6,lyr_ProyectosProporcional_7];
lyr_SectorTierrasBlancas_2.set('fieldAliases', {'id': 'id', 'MICROZONA': 'MICROZONA', 'Habitantes': 'Habitantes', 'Hombres': 'Hombres', 'Mujeres': 'Mujeres', });
lyr_ProyectosCategoria_3.set('fieldAliases', {'ID': 'ID', 'INICIATIVA': 'INICIATIVA', 'FINANCIAMI': 'FINANCIAMI', 'EXTERNO': 'EXTERNO', 'MUNICIPAL': 'MUNICIPAL', 'MONTO': 'MONTO', 'ESTADO': 'ESTADO', 'TEMATICA': 'TEMATICA', 'ANO': 'ANO', 'NORTE': 'NORTE', 'ESTE': 'ESTE', });
lyr_ProyectosFinanciamiento_4.set('fieldAliases', {'ID': 'ID', 'INICIATIVA': 'INICIATIVA', 'FINANCIAMI': 'FINANCIAMI', 'EXTERNO': 'EXTERNO', 'MUNICIPAL': 'MUNICIPAL', 'MONTO': 'MONTO', 'ESTADO': 'ESTADO', 'TEMATICA': 'TEMATICA', 'ANO': 'ANO', 'NORTE': 'NORTE', 'ESTE': 'ESTE', });
lyr_ProyectosEstadoproyecto_5.set('fieldAliases', {'ID': 'ID', 'INICIATIVA': 'INICIATIVA', 'FINANCIAMI': 'FINANCIAMI', 'EXTERNO': 'EXTERNO', 'MUNICIPAL': 'MUNICIPAL', 'MONTO': 'MONTO', 'ESTADO': 'ESTADO', 'TEMATICA': 'TEMATICA', 'ANO': 'ANO', 'NORTE': 'NORTE', 'ESTE': 'ESTE', });
lyr_ProyectosTierrasBlancas14042026_6.set('fieldAliases', {'ID': 'ID', 'INICIATIVA': 'INICIATIVA', 'FINANCIAMI': 'FINANCIAMI', 'EXTERNO': 'EXTERNO', 'MUNICIPAL': 'MUNICIPAL', 'MONTO': 'MONTO', 'ESTADO': 'ESTADO', 'TEMATICA': 'TEMATICA', 'ANO': 'ANO', 'NORTE': 'NORTE', 'ESTE': 'ESTE', });
lyr_ProyectosProporcional_7.set('fieldAliases', {'ID': 'ID', 'INICIATIVA': 'INICIATIVA', 'FINANCIAMI': 'FINANCIAMI', 'EXTERNO': 'EXTERNO', 'MUNICIPAL': 'MUNICIPAL', 'MONTO': 'MONTO', 'ESTADO': 'ESTADO', 'TEMATICA': 'TEMATICA', 'ANO': 'ANO', 'NORTE': 'NORTE', 'ESTE': 'ESTE', });
lyr_SectorTierrasBlancas_2.set('fieldImages', {'id': '', 'MICROZONA': '', 'Habitantes': '', 'Hombres': '', 'Mujeres': '', });
lyr_ProyectosCategoria_3.set('fieldImages', {'ID': '', 'INICIATIVA': '', 'FINANCIAMI': '', 'EXTERNO': '', 'MUNICIPAL': '', 'MONTO': '', 'ESTADO': '', 'TEMATICA': '', 'ANO': '', 'NORTE': '', 'ESTE': '', });
lyr_ProyectosFinanciamiento_4.set('fieldImages', {'ID': '', 'INICIATIVA': '', 'FINANCIAMI': '', 'EXTERNO': '', 'MUNICIPAL': '', 'MONTO': '', 'ESTADO': '', 'TEMATICA': '', 'ANO': '', 'NORTE': '', 'ESTE': '', });
lyr_ProyectosEstadoproyecto_5.set('fieldImages', {'ID': '', 'INICIATIVA': '', 'FINANCIAMI': '', 'EXTERNO': '', 'MUNICIPAL': '', 'MONTO': '', 'ESTADO': '', 'TEMATICA': '', 'ANO': '', 'NORTE': '', 'ESTE': '', });
lyr_ProyectosTierrasBlancas14042026_6.set('fieldImages', {'ID': '', 'INICIATIVA': '', 'FINANCIAMI': '', 'EXTERNO': '', 'MUNICIPAL': '', 'MONTO': '', 'ESTADO': '', 'TEMATICA': '', 'ANO': '', 'NORTE': '', 'ESTE': '', });
lyr_ProyectosProporcional_7.set('fieldImages', {'ID': '', 'INICIATIVA': '', 'FINANCIAMI': '', 'EXTERNO': '', 'MUNICIPAL': '', 'MONTO': '', 'ESTADO': '', 'TEMATICA': '', 'ANO': '', 'NORTE': '', 'ESTE': '', });
lyr_SectorTierrasBlancas_2.set('fieldLabels', {'id': 'hidden field', 'MICROZONA': 'hidden field', 'Habitantes': 'hidden field', 'Hombres': 'hidden field', 'Mujeres': 'hidden field', });
lyr_ProyectosCategoria_3.set('fieldLabels', {'ID': 'hidden field', 'INICIATIVA': 'hidden field', 'FINANCIAMI': 'hidden field', 'EXTERNO': 'hidden field', 'MUNICIPAL': 'hidden field', 'MONTO': 'hidden field', 'ESTADO': 'hidden field', 'TEMATICA': 'hidden field', 'ANO': 'hidden field', 'NORTE': 'hidden field', 'ESTE': 'hidden field', });
lyr_ProyectosFinanciamiento_4.set('fieldLabels', {'ID': 'hidden field', 'INICIATIVA': 'hidden field', 'FINANCIAMI': 'hidden field', 'EXTERNO': 'hidden field', 'MUNICIPAL': 'hidden field', 'MONTO': 'hidden field', 'ESTADO': 'hidden field', 'TEMATICA': 'hidden field', 'ANO': 'hidden field', 'NORTE': 'hidden field', 'ESTE': 'hidden field', });
lyr_ProyectosEstadoproyecto_5.set('fieldLabels', {'ID': 'hidden field', 'INICIATIVA': 'hidden field', 'FINANCIAMI': 'hidden field', 'EXTERNO': 'hidden field', 'MUNICIPAL': 'hidden field', 'MONTO': 'hidden field', 'ESTADO': 'hidden field', 'TEMATICA': 'hidden field', 'ANO': 'hidden field', 'NORTE': 'hidden field', 'ESTE': 'hidden field', });
lyr_ProyectosTierrasBlancas14042026_6.set('fieldLabels', {'ID': 'hidden field', 'INICIATIVA': 'hidden field', 'FINANCIAMI': 'hidden field', 'EXTERNO': 'hidden field', 'MUNICIPAL': 'hidden field', 'MONTO': 'hidden field', 'ESTADO': 'hidden field', 'TEMATICA': 'hidden field', 'ANO': 'hidden field', 'NORTE': 'hidden field', 'ESTE': 'hidden field', });
lyr_ProyectosProporcional_7.set('fieldLabels', {'ID': 'hidden field', 'INICIATIVA': 'hidden field', 'FINANCIAMI': 'hidden field', 'EXTERNO': 'hidden field', 'MUNICIPAL': 'hidden field', 'MONTO': 'hidden field', 'ESTADO': 'hidden field', 'TEMATICA': 'hidden field', 'ANO': 'hidden field', 'NORTE': 'hidden field', 'ESTE': 'hidden field', });
lyr_ProyectosProporcional_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});