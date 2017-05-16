function checkIt() {
  // Initialize scores
  var earth = 0;
  var mars = 0;
  var mercury = 0;
  var venus = 0;
  var jupiter = 0;
  var pluto = 0;
  var saturn = 0;
  var uranus = 0;
  var neptune = 0;


  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'earth') {
        earth++;
      }
      else if (e.value == 'mars') {
        mars++;
      }
      else if (e.value == 'mercury') {
        mercury++;
      }
      else if (e.value == 'uranus') {
        uranus++;
      }
      else if (e.value == 'neptune') {
        neptune++;
      }
      else if (e.value == 'venus') {
        venus++;
      }
      else if (e.value == 'pluto') {
        pluto++;
      }
      else if (e.value == 'saturn') {
        saturn++;
      }
      else if (e.value == 'jupiter') {
        jupiter++;
      }

    }

  }

  // Determine result
  var counts = "Earth: " + earth + ", " +
               "Mars: " + mars  + ", " +
               "Mercury: " + mercury + ", " +
               "Uranus: " + uranus + ", " +
               "Neptune: " + neptune  + ", " +
               "Venus: " + venus + ", " +
               "Pluto: " + pluto + ", " +
               "Saturn: " + saturn  + ", " +
               "Jupiter: " + jupiter;

  // What is the highest value?
  var max = Math.max(earth, mars, mercury, jupiter, saturn, venus, uranus, neptune, pluto);

  // Form a message
  var message;

  if (max == earth) {
    message = "Home is where you want to be./ You got: Earth with " + earth + "pt(s) " + '<br><img src="img/planet/earth.jpg">';
  }
  else if (max == mars) {
    message = "The blue sunrise seems to suit you./ Mars with " + mars + "pt(s) " + '<br><img src="img/planet/mars.jpg">';
  }
  else if (max == mercury) {
    message = "Invading the sun's personal space I see./ Mercury with " + mercury + "pt(s) " + '<br><img src="img/planet/mercury.jpg">';
  }
  else if (max == uranus) {
    message = "A planet that spins on it's side seems to be your cup of tea./ Uranus with " + uranus + "pt(s) " + '<br><img src="img/planet/uranus.jpg">';
  }
  else if (max == neptune) {
    message = "This ocean blue planet has a guy with a trident protecting it so have fun with that./ Neptune with " + neptune + "pt(s) " + '<br><img src="img/planet/neptune.jpg">';
  }
  else if (max == venus) {
    message = "This planet with cool breezes and a shining star staring you down it occasionally gets hot here./ Venus with " + venus + "pt(s) " + '<br><img src="img/planet/venus.jpg">';
  }
  else if (max == pluto) {
    message = "This lonely block of ice is great for watching the edge of the solar system./ Pluto with " + pluto + "pt(s) " + '<br><img src="img/planet/pluto.jpg">';
  }
  else if (max == saturn) {
    message = "You should vist saturn's hexagon poles sometime./ Saturn with " + saturn + "pt(s) " + '<br><img src="img/planet/saturn.jpg">';
  }
  else if (max == jupiter) {
    message = "It rains diamond here./ Jupiter with " + jupiter + "pt(s) " + '<br><img src="img/planet/jupiter.jpg">';
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result').innerHTML = message;
}
