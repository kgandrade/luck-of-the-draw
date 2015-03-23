// Cache jQuery references
var $gallery = null;

// Global objects
var asylumsGrantedChart = null;
var flkty = null;

// Google magic
google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(createAsylumsGrantedChart);

var onDocumentReady = function() {
  // jQuery references
  $gallery = $('.gallery');

  // Initialize
  $gallery.flickity({
    "pageDots": false,
    "accessibility": true,
    "setGallerySize": false,
  }).focus();

  flkty = $gallery.data('flickity');

  $gallery.on('settle', onGallerySettle);
}

function onGallerySettle() {
  var $el = $gallery.find('.gallery-cell').eq(flkty.selectedIndex);
  var bgImg = $el.data('bg-image');
  if (bgImg) {
    var newUrl = bgImg + '?' + Date.now();
    $el.css({
      'background-image': 'url("' + newUrl + '")'
    });
  }
}

// create the asylums granted chart
function createAsylumsGrantedChart() {
  var data = [
  	['Country', 'Asylums granted', { role: 'style' }],
  ];
  $.each(window.ASYLUMS_GRANTED, function(index, value) {
  	data.push([value.country, value.count, value.color]);
  });

  var data_table = new google.visualization.arrayToDataTable(data);
  var options = {
  	title: 'Asylums granted by nationality (Fiscal Year 2014)',
  	legend: { position: 'none' }
  }
  var chart = new google.visualization.ColumnChart(document.getElementById('asylums-granted-chart'));
  chart.draw(data_table, options);
}

$(document).ready(onDocumentReady);
