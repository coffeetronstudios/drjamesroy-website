/*global google:false*/

var overlay;

function OfficeOverlay(latLng, map) {
    this.latLng_ = latLng;
    this.map_ = map;
    this.div_ = null;
    this.setMap(map);
}

OfficeOverlay.prototype = new google.maps.OverlayView();

OfficeOverlay.prototype.onAdd = function() {
    this.div_ = document.getElementById('map-pin');
    this.div_.style.position = 'absolute';

    var panes = this.getPanes();
    panes.overlayMouseTarget.appendChild(this.div_);

    $('a').click(function(e) {
        e.stopPropagation();
    });

    google.maps.event.addDomListener(this.div_, 'click', function() {
        window.open('https://www.google.com/maps?q=502+Riverway+Place,+Bedford,+NH+03110', '_blank');
    });
};

OfficeOverlay.prototype.draw = function() {
    var px = this.getProjection().fromLatLngToDivPixel(this.latLng_);
    this.div_.style.left = (px.x - (this.div_.offsetWidth / 2)) + 'px';
    this.div_.style.top = (px.y - this.div_.offsetHeight) + 'px';
};

OfficeOverlay.prototype.onRemove = function() {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
};

function initialize() {
    var myLatLng = new google.maps.LatLng(42.962497, -71.47942);
    var mapOptions = {
        zoom: 12,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        draggable: false
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    overlay = new OfficeOverlay(myLatLng, map);
}

google.maps.event.addDomListener(window, 'load', initialize);
