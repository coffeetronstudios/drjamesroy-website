var map;
var chicago = new google.maps.LatLng(42.962497, -71.47942);

function HomeControl(controlDiv, map) {
  controlDiv.style.padding = '5px';
  var controlUI = document.createElement('div');
  controlUI.className = 'map-pin';
  controlUI.title = 'Click to set the map to Home';
  controlUI.innerHTML =
    '<a target="_blank" href="https://www.google.com/maps?q=502+Riverway+Place,+Bedford,+NH+03110&amp;sll=42.9625858999999,-71.47875199999999&amp;sspn=0.007224072552652955,0.011438267997772361&amp;t=m&amp;dg=opt&amp;hnear=Riverway+Pl,+Bedford,+Hillsborough,+New+Hampshire+03110&amp;z=16">' +
    '<div class="street-number">502</div>' +
    '<div>Riverway Place</div>' +
    '<div>Bedford, NH 03110</div>' +
    '<div>603.622.2100</div>' +
    '<div>Fax: 602.622.5665</div>' +
    '</a>';
  controlDiv.appendChild(controlUI);

  google.maps.event.addDomListener(controlUI, 'click', function() {
    map.setCenter(chicago);
  });
}

function initialize() {
  var mapDiv = document.getElementById('map-canvas');
  var mapOptions = {
    zoom: 12,
    center: chicago,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    navigationControl: false,
    scaleControl: false,
    draggable: false
  }
  map = new google.maps.Map(mapDiv, mapOptions);

  var homeControlDiv = document.createElement('div');
  var homeControl = new HomeControl(homeControlDiv, map);

  homeControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.CENTER].push(homeControlDiv);
}

google.maps.event.addDomListener(window, 'load', initialize);
