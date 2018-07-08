

function getJsonFromUrl() {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

//Creates Javascript Json 
g = getJsonFromUrl()


//outputParameters( )

// takes g and outputs all pramas
for (var key in g) {
    if (p.hasOwnProperty(key)) {
        console.log(key + " -> " + p[key]);
    }
}