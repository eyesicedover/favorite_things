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
    mixedFavoritesArray.push("purple", "cat", "bananas");
    $("ul#output3").append("<li>" + mixedFavoritesArray[0] + "</li>");
    $("ul#output3").append("<li>" + mixedFavoritesArray[1] + "</li>");
    $("ul#output3").append("<li>" + mixedFavoritesArray[2] + "</li>");
    $("ul#output3").append("<li>" + mixedFavoritesArray[3] + "</li>");
    $("ul#output3").append("<li>" + mixedFavoritesArray[4] + "</li>");
    $("ul#output3").append("<li>" + mixedFavoritesArray[5] + "</li>");
    $("ul#output3").append("<li>" + mixedFavoritesArray[6] + "</li>");
    $("ul#output3").append("<li>" + mixedFavoritesArray[7] + "</li>");
    event.preventDefault();
  });
});
