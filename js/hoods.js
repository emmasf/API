var titles = ['', "SOMA", "Upper Mission", "Mission Bay", "The Castro"],
    req = $.when($.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR58.json',
       dataType: 'jsonp',
       type: "GET"
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR259.json',
       dataType: 'jsonp',
       type: "GET"
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR53.json',
       dataType: 'jsonp',
       type: "GET"
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KPCASANF2.json',
       dataType: 'jsonp',
       type: "GET"
    }));
  
  req.done(function(r1, r2, r3, r4){
    var data = _.union(r1[0].hourly_forecast, r2[0].hourly_forecast, r3[0].hourly_forecast, r4[0].hourly_forecast),
        $forecasts = $('<div />', {id: 'forecasts'}),
        locations = [];
    
    for (var i=1; i < 5; i++) {
      var results = 'r'+i,
          resultsObj = eval(results);
      
      resultsObj[0].location = titles[i];
      locations.push(resultsObj[0]);
    }
    
    console.log(locations);
    
    for (var i=0; i < locations.length; i++) {
      var location = locations[i],
          $item = $('<div />', {id: 'location-' + i, class: 'location-item'}),
          title = '<h2>' + location.location + '</h2>';

      $item.append(title);
     
      for (var j=0; j < location.hourly_forecast.length; j++) {
        var $fItem = $('<div />', {class: 'forecast-' + j}),
          fTime = '<h3 class="time">' + location.hourly_forecast[j].FCTTIME.hour_padded + ' ' + location.hourly_forecast[j].FCTTIME.ampm + '&#58; &nbsp;</h3>',
          fTemp = '<h3 class="temp">' + location.hourly_forecast[j].temp.english + '&deg; <br/></h3>',
          fTitle = '<h3 class="condition">' + location.hourly_forecast[j].condition + ' </h3>',  
          fIcon = '<img class="icon" src="' + location.hourly_forecast[j].icon_url + '">';
        
        $fItem.append(fTime,fTemp,fTitle,fIcon);
        $item.append($fItem);
      }
      
      
      $forecasts.append($item);
    }
    
    $('body').append($forecasts);
  });


  