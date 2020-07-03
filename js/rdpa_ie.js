var map = new ol.Map({
target: 'map',
layers: [
  new ol.layer.Tile({
    source: new ol.source.OSM()
  }),
  new ol.layer.Tile({
    source: new ol.source.TileWMS({
        format: 'image/png',
        url: 'https://geo.weather.gc.ca/geomet/',
        params: {'LAYERS': 'RDPA.24P_PR', 'TILED': true},
    })
  })
],
view: new ol.View({
  center: ol.proj.fromLonLat([-97, 57]),
  zoom: 3
})
});
