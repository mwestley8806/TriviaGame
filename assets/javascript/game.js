$(".btn").on("click", function() {
    $("#game").html("Let's Play!")
});

var wins;
var losses;

setTimeout(start, 5000);
setTimeout(play, 15000);
setTimeout(play1, 15000);


function start () {

    $("#game").html("Mako, Orlando's tallest roller coaster is located at SeaWorld, how tall is it? <button class=lose>400 Feet</button><button id=win>200 Feet</button><button class=lose>300 Feet</button><button class=lose>100 Feet</button>");

    if($("#win").on("click", function(){
        var wins=+1;
        $("#game").html("Correct! Here is a park map!")
        $("#prizes").html("<img id='map' src='assets/images/map.png'>")
        console.log(wins);

    }));

    if ($(".lose").on("click", function(){
        $("#game").html("That is Incorrect! Mako is 200 feet tall and travels at speeds over 73mph!")
        $("#money").html("X")
        var losses=+1;
        console.log(losses);
    }));
}

function play () {
    
    $("#game").html("Magic Kingdom at Walt Disney World is the busiest theme park in the world, what year did it open? <button class=lose>1928</button><button class=lose>1955</button><button id=win>1971<button class=lose>1981</button>");
    
    if($("#win").on("click", function(){
        var wins=+1;
        $("#game").html("Correct! Here are some Balloons!!")
        $("#prizes").append("<img id='map' src='assets/images/balloons.png'>")
        console.log(wins);

    }));

    if ($(".lose").on("click", function(){
        $("#game").html("That is Incorrect! Magic Kingdom opened in 1971, Mickey Mouse was born in 1928, Disneyland opened in 1955 and Epcot in 1982!")
        $("#money2").html("X")
        var losses=+1;
        console.log(losses);
    }));
}

function play1 () {
    
    $("#game").html("The Walt Disney Company is the largest operator of theme parks in the world, how many theme parks do they operate? <button class=lose>4</button><button class=lose>6</button><button class=lose>10<button id=win>12</button>");

    if($("#win").on("click", function(){
        var wins=+1;
        $("#game").html("Correct! Here are some Cotton Candy!!")
        $("#prizes").append("<img id='map' src='assets/images/cottonCandy.png'>")
        console.log(wins);

    }));

    if ($(".lose").on("click", function(){
        $("#game").html("That is Incorrect! The Walt Disney Company operates 12 theme parks around the world in the United States, France, China and Japan!")
        $("#money3").html("X")
        var losses=+1;
        console.log(losses);
    }));
}

// function play () {
    
//     $("#game").html("Universal has seen many attractions come and go during it's short history, which of the following was NOT an opening day attraction at Universal Studios Florida? <button>Kongfrontation</button><button>Earthquake</button><button>Terminator 2:3D<button>Alfred Hitchcock</button>");
    
// };

var wins;
var losses;