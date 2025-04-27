
const view = new ol.View({
  projection: 'EPSG:3857',
         center: [1745614.86,5580029.44],
          zoom: 7,
		  
        });

    
const overviewMapControl = new ol.control.OverviewMap({
            layers: [
                new ol.layer.Tile({
                  source: new ol.source.OSM(),
                })
          ],
          collapseLabel: '\u00BB',
          label: '\u00AB',
          collapsed: false
        });
const promjena_mjerila = new ol.control.Zoom({zoomInLabel:'+', zoomOutLabel:'-'});
const cijeli_ekran = new ol.control.FullScreen({label:'FS'});
const slider = new ol.control.ZoomSlider();

      
const base_maps = new ol.layer.Group({
            'title': 'Osnovna karta',
            layers: [
                    new ol.layer.Tile({
                    title: 'OSM',
                    type: 'base',
                    visible: true,
                    source: new ol.source.OSM()
                })
                
            ]
        });


const DOF = new ol.layer.Tile({
  title: 'DOF',
  visible:false,
  source: new ol.source.TileWMS({
    url: 'https://geoportal.dgu.hr/services/inspire/orthophoto_lidar_2022_2023/wms',
    params: {'LAYERS': 'OI.OrthoimageCoverage'
         
    },
   
  })
});





const sloj = new ol.layer.Vector({
  title:"Katastarske_opcine",
  visible:true,
  source: new ol.source.Vector({
    url:"data/opcine.geojson",
    format: new ol.format.GeoJSON(),
  }),
  style: {
    'fill-color': ['string', ['get', 'COLOR'], '#45b94e'],
    'stroke-width': 1
},});



const overlays = new ol.layer.Group({
  'title': 'Slojevi',
  layers: [DOF,sloj]


});

const layerSwitcher = new ol.control.LayerSwitcher({
        activationMode: 'click',
        startActive: false,
        tipLabel: 'Layers', // Optional label for button
        groupSelectStyle: 'children', // Can be 'children' [default], 'group' or 'none'
        collapseTipLabel: 'Collapse layers',
      });
    
   







const map = new ol.Map({
    view: view,
  
    layers: [base_maps, overlays],
      target: "map",
      controls: 
        [cijeli_ekran,layerSwitcher, promjena_mjerila,slider,overviewMapControl],
    
});

//konstrukcija selektora sloja
const featureOverlay = new ol.layer.Vector({
  source:  new ol.source.Vector(),
  map: map,
  style: {
    'stroke-color': 'rgba(170, 18, 18, 0.7)',
    'stroke-width': 3,
  },
});

let highlight;
const displayFeatureInfo = function (pixel) {
  const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
   console.log(feature);
    return feature;
  });

  const info = document.getElementById('p');
if (feature) {
    info.innerHTML = feature.get('label') || '&nbsp;';
  } else {
    info.innerHTML = 'Nema podataka';
  }

  if (feature !== highlight) {
    if (highlight) {
      featureOverlay.getSource().removeFeature(highlight);
    }
    if (feature) {
      featureOverlay.getSource().addFeature(feature);
    }
    highlight = feature;
  }
  
};

map.on('pointermove', function (evt) {
  displayFeatureInfo(evt.pixel);
});

map.on('click', function (evt) {
  displayFeatureInfo(evt.pixel);


});



// map.on('pointermove', function (evt) {
//   displayFeatureInfo(evt.pixel);
// });

// map.on('click', function (evt) {
//   displayFeatureInfo(evt.pixel);
//   let text = document.getElementById('x').innerHTML;
//   document.getElementById("id").value = text;
// });


