// Intro to JQuery lesson
// Individual project exercises 1-5

var beers = [];

var isSortedAscending = false;

function addBeer(name, category, rating) {
    var beer = {name: name, category: category, rating: rating};
    beers.push(beer);
}

function renderBeers () {
    $('.beers-list').find('li').remove();
    for (var i=0; i < beers.length; i++) {
        $('.beers-list').append('<li>Beer name: ' + beers[i].name + ' , category: ' + beers[i].category +
        ' , rating: ' + beers[i].rating + '</li>');
    }
}

function sortAscending() {
    if (beers.length) {
        beers = beers.sort(function (a, b) {
            return a.rating - b.rating;
        });
    }
}

function sortDescending() {
    if (beers.length) {
        beers = beers.sort(function (a, b) {
            return b.rating - a.rating;
        });
    }
}

$('.post-beer').click(function () {
    addBeer($('.beer-input').val(), $('.category-input').val(), $('#rating').val());
    renderBeers();
    $('.beer-input').val("");
    $('.category-input').val("");
    $('#rating').val("0");
});

$('.sort-beer').click(function () {
    if (!isSortedAscending) {
        sortAscending();
        renderBeers();
        isSortedAscending = true;
        $('.sort-beer').html("Sort from best to worst");
    } else {
        sortDescending();
        renderBeers();
        isSortedAscending = false;
        $('.sort-beer').html("Sort from worst to best");
    }
});