$(".btn").on("click", function() {
    $("#game").html("Let's Play!")
});

setTimeout(start, 5000);
setTimeout(ten, 10000);

function start () {

    $("#game").html("Mako, Orlando's Tallest Roller Coaster is Located at SeaWorld, How Tall is it? <button>400 Feet</button><button>200 Feet</button><button>300 Feet<button>100 Feet</button>");
}


