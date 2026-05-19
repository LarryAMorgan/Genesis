var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Genesisboundary_1 = new ol.format.GeoJSON();
var features_Genesisboundary_1 = format_Genesisboundary_1.readFeatures(json_Genesisboundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Genesisboundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Genesisboundary_1.addFeatures(features_Genesisboundary_1);
var lyr_Genesisboundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Genesisboundary_1, 
                style: style_Genesisboundary_1,
                popuplayertitle: 'Genesis boundary',
                interactive: false,
                title: '<img src="styles/legend/Genesisboundary_1.png" /> Genesis boundary'
            });
var format_Pakowhaiboundary_2 = new ol.format.GeoJSON();
var features_Pakowhaiboundary_2 = format_Pakowhaiboundary_2.readFeatures(json_Pakowhaiboundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pakowhaiboundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pakowhaiboundary_2.addFeatures(features_Pakowhaiboundary_2);
var lyr_Pakowhaiboundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pakowhaiboundary_2, 
                style: style_Pakowhaiboundary_2,
                popuplayertitle: 'Pakowhai boundary',
                interactive: false,
                title: '<img src="styles/legend/Pakowhaiboundary_2.png" /> Pakowhai boundary'
            });
var format_Blocks_3 = new ol.format.GeoJSON();
var features_Blocks_3 = format_Blocks_3.readFeatures(json_Blocks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blocks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blocks_3.addFeatures(features_Blocks_3);
var lyr_Blocks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Blocks_3, 
                style: style_Blocks_3,
                popuplayertitle: 'Blocks',
                interactive: true,
    title: 'Blocks<br />\
    <img src="styles/legend/Blocks_3_0.png" /> Apple<br />\
    <img src="styles/legend/Blocks_3_1.png" /> Cherry<br />\
    <img src="styles/legend/Blocks_3_2.png" /> Fallow<br />\
    <img src="styles/legend/Blocks_3_3.png" /> Peach<br />\
    <img src="styles/legend/Blocks_3_4.png" /> Pear<br />\
    <img src="styles/legend/Blocks_3_5.png" /> Plum<br />' });
var format_Buildings_4 = new ol.format.GeoJSON();
var features_Buildings_4 = format_Buildings_4.readFeatures(json_Buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_4.addFeatures(features_Buildings_4);
var lyr_Buildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_4, 
                style: style_Buildings_4,
                popuplayertitle: 'Buildings',
                interactive: false,
                title: '<img src="styles/legend/Buildings_4.png" /> Buildings'
            });
var format_Loading_5 = new ol.format.GeoJSON();
var features_Loading_5 = format_Loading_5.readFeatures(json_Loading_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Loading_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loading_5.addFeatures(features_Loading_5);
var lyr_Loading_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loading_5, 
                style: style_Loading_5,
                popuplayertitle: 'Loading',
                interactive: false,
                title: '<img src="styles/legend/Loading_5.png" /> Loading'
            });
var format_Submain_6 = new ol.format.GeoJSON();
var features_Submain_6 = format_Submain_6.readFeatures(json_Submain_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Submain_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Submain_6.addFeatures(features_Submain_6);
var lyr_Submain_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Submain_6, 
                style: style_Submain_6,
                popuplayertitle: 'Submain',
                interactive: false,
                title: '<img src="styles/legend/Submain_6.png" /> Submain'
            });
var format_Flush_7 = new ol.format.GeoJSON();
var features_Flush_7 = format_Flush_7.readFeatures(json_Flush_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flush_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flush_7.addFeatures(features_Flush_7);
var lyr_Flush_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flush_7, 
                style: style_Flush_7,
                popuplayertitle: 'Flush',
                interactive: false,
                title: '<img src="styles/legend/Flush_7.png" /> Flush'
            });
var format_Valve_8 = new ol.format.GeoJSON();
var features_Valve_8 = format_Valve_8.readFeatures(json_Valve_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Valve_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valve_8.addFeatures(features_Valve_8);
var lyr_Valve_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valve_8, 
                style: style_Valve_8,
                popuplayertitle: 'Valve',
                interactive: false,
                title: '<img src="styles/legend/Valve_8.png" /> Valve'
            });
var format_Pump_9 = new ol.format.GeoJSON();
var features_Pump_9 = format_Pump_9.readFeatures(json_Pump_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pump_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pump_9.addFeatures(features_Pump_9);
var lyr_Pump_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pump_9, 
                style: style_Pump_9,
                popuplayertitle: 'Pump',
                interactive: false,
                title: '<img src="styles/legend/Pump_9.png" /> Pump'
            });
var format_Bore_10 = new ol.format.GeoJSON();
var features_Bore_10 = format_Bore_10.readFeatures(json_Bore_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bore_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bore_10.addFeatures(features_Bore_10);
var lyr_Bore_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bore_10, 
                style: style_Bore_10,
                popuplayertitle: 'Bore',
                interactive: false,
                title: '<img src="styles/legend/Bore_10.png" /> Bore'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Genesisboundary_1.setVisible(true);lyr_Pakowhaiboundary_2.setVisible(true);lyr_Blocks_3.setVisible(true);lyr_Buildings_4.setVisible(true);lyr_Loading_5.setVisible(true);lyr_Submain_6.setVisible(true);lyr_Flush_7.setVisible(true);lyr_Valve_8.setVisible(true);lyr_Pump_9.setVisible(true);lyr_Bore_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Genesisboundary_1,lyr_Pakowhaiboundary_2,lyr_Blocks_3,lyr_Buildings_4,lyr_Loading_5,lyr_Submain_6,lyr_Flush_7,lyr_Valve_8,lyr_Pump_9,lyr_Bore_10];
lyr_Genesisboundary_1.set('fieldAliases', {'id': 'id', 'appellation': 'appellation', 'affected_surveys': 'affected_surveys', 'parcel_intent': 'parcel_intent', 'topology_type': 'topology_type', 'statutory_actions': 'statutory_actions', 'land_district': 'land_district', 'titles': 'titles', 'survey_area': 'survey_area', 'calc_area': 'calc_area', 'title_no': 'title_no', 'status': 'status', 'type': 'type', 'land_distr': 'land_distr', 'issue_date': 'issue_date', 'guarantee_': 'guarantee_', 'estate_des': 'estate_des', 'number_own': 'number_own', 'spatial_ex': 'spatial_ex', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'layer': 'layer', 'path': 'path', });
lyr_Pakowhaiboundary_2.set('fieldAliases', {'FID': 'FID', 'id': 'id', 'title_no': 'title_no', 'status': 'status', 'type': 'type', 'land_distr': 'land_distr', 'issue_date': 'issue_date', 'guarantee_': 'guarantee_', 'estate_des': 'estate_des', 'number_own': 'number_own', 'spatial_ex': 'spatial_ex', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Blocks_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Name': 'Name', 'Fruit': 'Fruit', 'Year': 'Year', 'Area': 'Area (ha)', });
lyr_Buildings_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Name': 'Name', });
lyr_Loading_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Name': 'Name', });
lyr_Submain_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', });
lyr_Flush_7.set('fieldAliases', {'Name': 'Name', });
lyr_Valve_8.set('fieldAliases', {'Name': 'Name', });
lyr_Pump_9.set('fieldAliases', {'Name': 'Name', });
lyr_Bore_10.set('fieldAliases', {'Name': 'Name', });
lyr_Genesisboundary_1.set('fieldImages', {'id': 'Range', 'appellation': '', 'affected_surveys': '', 'parcel_intent': '', 'topology_type': '', 'statutory_actions': '', 'land_district': '', 'titles': '', 'survey_area': '', 'calc_area': '', 'title_no': 'TextEdit', 'status': 'TextEdit', 'type': 'TextEdit', 'land_distr': 'TextEdit', 'issue_date': 'TextEdit', 'guarantee_': 'TextEdit', 'estate_des': 'TextEdit', 'number_own': 'Range', 'spatial_ex': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'layer': '', 'path': '', });
lyr_Pakowhaiboundary_2.set('fieldImages', {'FID': 'Range', 'id': 'Range', 'title_no': 'TextEdit', 'status': 'TextEdit', 'type': 'TextEdit', 'land_distr': 'TextEdit', 'issue_date': 'TextEdit', 'guarantee_': 'TextEdit', 'estate_des': 'TextEdit', 'number_own': 'Range', 'spatial_ex': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Blocks_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': 'TextEdit', 'Fruit': 'TextEdit', 'Year': 'TextEdit', 'Area': 'TextEdit', });
lyr_Buildings_4.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': 'TextEdit', });
lyr_Loading_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': 'TextEdit', });
lyr_Submain_6.set('fieldImages', {'Shape_Leng': 'TextEdit', });
lyr_Flush_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_Valve_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_Pump_9.set('fieldImages', {'Name': 'TextEdit', });
lyr_Bore_10.set('fieldImages', {'Name': 'TextEdit', });
lyr_Genesisboundary_1.set('fieldLabels', {'id': 'no label', 'appellation': 'no label', 'affected_surveys': 'no label', 'parcel_intent': 'no label', 'topology_type': 'no label', 'statutory_actions': 'no label', 'land_district': 'no label', 'titles': 'no label', 'survey_area': 'no label', 'calc_area': 'no label', 'title_no': 'no label', 'status': 'no label', 'type': 'no label', 'land_distr': 'no label', 'issue_date': 'no label', 'guarantee_': 'no label', 'estate_des': 'no label', 'number_own': 'no label', 'spatial_ex': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Pakowhaiboundary_2.set('fieldLabels', {'FID': 'no label', 'id': 'no label', 'title_no': 'no label', 'status': 'no label', 'type': 'no label', 'land_distr': 'no label', 'issue_date': 'no label', 'guarantee_': 'no label', 'estate_des': 'no label', 'number_own': 'no label', 'spatial_ex': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_Blocks_3.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Name': 'hidden field', 'Fruit': 'inline label - always visible', 'Year': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Buildings_4.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Name': 'no label', });
lyr_Loading_5.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Name': 'no label', });
lyr_Submain_6.set('fieldLabels', {'Shape_Leng': 'no label', });
lyr_Flush_7.set('fieldLabels', {'Name': 'no label', });
lyr_Valve_8.set('fieldLabels', {'Name': 'no label', });
lyr_Pump_9.set('fieldLabels', {'Name': 'no label', });
lyr_Bore_10.set('fieldLabels', {'Name': 'no label', });
lyr_Bore_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});