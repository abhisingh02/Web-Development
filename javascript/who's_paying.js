function whosPaying(names) {

    var ranNum = Math.floor(Math.random() * names.length);

    var tempNames = (names[ranNum]);

    return tempNames + " is going to buy lunch today!";

}

console.log(whosPaying(["Angela", "Nicole", "Emre", "Jun", "Kuromi"]));