// Cache jQuery references
var $gallery = null;

// Global objects
var asylumsGrantedChart = null;

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
