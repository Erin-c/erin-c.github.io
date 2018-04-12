
//script for index.html

  function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.3736, lng: -71.1097},
      zoom: 13,
      mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }
//script for survey.html

function QuizItem(question) {
  this.question = question;
}

var quizQuestions = []
quizQuestions[0] = new QuizItem("Write books or plays");
quizQuestions[1] = new QuizItem("Repair household appliances");
quizQuestions[2] = new QuizItem("Compose or arrange music");
quizQuestions[3] = new QuizItem("Host civic, charitable, or promotional events that are broadcast over television or radio");
quizQuestions[4] = new QuizItem("Examine blood samples using a microscope");
quizQuestions[5] = new QuizItem("Teach sign language for people with hearing disabilities");
quizQuestions[6] = new QuizItem("Draw designs and blueprints");
quizQuestions[7] = new QuizItem("Represent a client in a lawsuit");
quizQuestions[8] = new QuizItem("Create special effects for movies");
quizQuestions[9] = new QuizItem("Locate guests to appear on talk or interview shows");
quizQuestions[10] = new QuizItem("Develop a better way to predict the weather");
quizQuestions[11] = new QuizItem("Install software across computers on a large network");
quizQuestions[12] = new QuizItem("Create models of buildings and other things");
quizQuestions[13] = new QuizItem("Help people overcome barriers and challenges");
quizQuestions[14] = new QuizItem("Help sick animals get better");
quizQuestions[15] = new QuizItem("Write and edit video and scripts for broadcasts");
quizQuestions[16] = new QuizItem("Negotiate, defend and debate");
quizQuestions[17] = new QuizItem("Play video games and figure out how they work");
quizQuestions[18] = new QuizItem("Solve technical or mechanical problems");
quizQuestions[19] = new QuizItem("Find a cure for diseases");
quizQuestions[20] = new QuizItem("Read and tell stories");
quizQuestions[21] = new QuizItem("Use video and recording technology");

var currentIndex = 0, numOfAnswered = 0;
var currentQuestion = quizQuestions[currentIndex];

  function add_question(){
    var pTag = document.getElementById('q_block');
    if(!pTag)
      return;
    pTag.innerHTML = currentQuestion.question;
    currentIndex++;
    numOfAnswered++;
    currentQuestion = quizQuestions[currentIndex];
  }

add_question();

//JS for matches.html

function change_view(new_view, current_view){
    $("."+current_view).addClass( "d-none" );
    $("."+new_view).removeClass( "d-none" );
    current_view = new_view;
}
