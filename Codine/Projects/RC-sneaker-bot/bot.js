var size = '10'

function backdoorSizeID(size) {
  
  var id = $('title:contains(' + size + ')').eq(0).parent()
    .find('id').text()
  console.log('id', id)
  var newUrl = 'https://shop.reigningchamp.com/cart/' + id + ':1'
  window.location.href = newUrl
}



backdoorSizeID(size);