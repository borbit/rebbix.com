var $cards = document.querySelectorAll('.card')
var coordsAnchors = getAnchorsCoordinates()
var $marker = document.createElement('div')
var $markers = []

$marker.classList.add('marker')
$marker.classList.add('marker_hide')

coordsAnchors = coordsAnchors.reverse()
coordsAnchors.forEach(function(anchor) {
  var $markerItem = document.createElement('div')
  $markerItem.classList.add('marker__item')
  $markerItem.innerHTML = anchor.year
  $marker.appendChild($markerItem)
  $markers.push($markerItem)
})

document.body.appendChild($marker)
var coordsMarkers = getMarkersCoordinates()
document.addEventListener('DOMContentLoaded', arrange)
window.addEventListener('scroll', arrange)

coordsMarkers.forEach(function(marker) {
  marker.$marker.addEventListener('click', function() {
    var anchor = coordsAnchors.find(function(anchor) {
      return anchor.year == marker.year
    })
    scrollTo(document.body, anchor.top - 40, 500)
  })
})

function arrange() {
  coordsMarkers.forEach(function(marker) {
    coordsAnchors.some(function(anchor) {
      if (marker.year == anchor.year) {
        if (marker.top > anchor.top - 30 - document.body.scrollTop) {
          marker.$marker.classList.add('marker__item_active')
          marker.$marker.style.top = anchor.top - 30 + 'px'
        } else {
          marker.$marker.classList.remove('marker__item_active')
          marker.$marker.style.top = '100%'
        }
      }
    })
  })
}

function getAnchorsCoordinates() {
  var coords = {}
  for(var i = 0; i < $cards.length; i++) {
    var year = $cards[i].dataset.year
    var rect = $cards[i]
      .querySelector('.card__wrap')
      .getBoundingClientRect()
    if (coords[year]) {
      continue
    }
    coords[year] = {
      top: rect.top + window.pageYOffset
    , year: year
    }
  }
  return Object.keys(coords).map(function(i) {
    return coords[i]
  })
}

function getMarkersCoordinates() {
  var coords = []
  for(var i = 0; i < $markers.length; i++) {
    var $marker = $markers[i]
    var year = $marker.innerHTML
    var rect = $marker.getBoundingClientRect()

    coords.push({
      $marker: $marker
    , top: rect.top
    , year: year
    })
  }
  return coords
}
