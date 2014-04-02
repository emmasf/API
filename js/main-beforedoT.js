// Dribbble API Exercise
// 1. Return data from API
// 2. Parse and output data on screen
// 3. Learn about templating api data
// 4. Best practices

'use strict';

// Good practice: make things as specific as possible

// This is a self-executing function: ()(); 
// This bit below means that we always use the $ sign to mean jquery:(function ($){ ---content-here--- })(jQuery); 
 
(function ($){
 
  var getHoods = null,
      displayHoods = null,
      displayHoodName = null,
      listUrl = 'http://api.wunderground.com/api/419ec08f527a6f9b/geolookup/conditions/q/CA/San_Francisco.json',
      perPage = 15;

// getting the hoods       
  getHoods = function getHoodsF(count) { // WHAT IS THE F?????
    var req = $.ajax({  
        url: listUrl,
        dataType: 'jsonp', // if xml, don't use jsonp, use xml. this is specific to where it's coming from
        data: {
          per_page: count
          },
        type: 'GET'
    });
    
    req.done(displayHoods);
    
  };
  
// here's what we're showing for each hood:  
  displayHoods = function displayHoodsF(data) {
    var weatherMap = document.createElement('div'),
        Hood = null,
        data = data.weatherMap;
        // it's in quotes because it's an html element
       
        // removing this logger: console.log(data, this)
     
     // this for loop can go away with the moustache stuff
     for (var i = 0; i < data.length; i++) {
        Hood = data[i];
        
        var Hood = document.createElement('div'),
            name = document.createElement('h2'),
            location = document.createElement('h2'); // polygon, please
            temp_F = document.createElement('h2'),
            fog = document.createElement('h2'); 

            
        dribbble.classList.add('shot');
      
        dribbble.id = 'shot-' + shot.id;
        title.innerHTML = shot.title;
        link.href = shot.url;
        img.src = shot.image_url;
        
        $(link).append(img);
        $(dribbble).append(link).append(title);
        $(shots).append(dribbble);
    }
        
    $('body').append(shots);
        
  };

// here's a marker for each shot  
  displayShotInfo = function displayShotInfoF(id) {
    
  }

// here's where it actually happens
  getEntries(); 
  
})(jQuery); 

/****

JAVASCRIPT THINGS

document
createElement
function
null
count
data
req
everything in jquery.ajax
console
console.log (data, this)
adding document. means that this isnt for display, it's for the html document.




***/
 
  
  