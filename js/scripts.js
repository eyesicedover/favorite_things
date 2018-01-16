$(document).ready(function() {
  $("#faveForm").submit(function(event){
    var userName = $("input#name").val();
    var userFood = $("input#food").val();
    var userAnimal = $("input#animal").val();
    var userMovie = $("input#movie").val();
    var userColor = $("input#color").val();
    var favoritesArray = [userName, userFood, userAnimal, userMovie, userColor];
    $("#output").text(favoritesArray);
    var mixedFavoritesArray = [favoritesArray[3], favoritesArray[0], favoritesArray[1], favoritesArray[4], favoritesArray[2]];
    $("#output2").text(mixedFavoritesArray);
    event.preventDefault();
  });
});
