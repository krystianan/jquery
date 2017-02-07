$(function(){
    var carouselList = $("#carousel ul");
    var changeSlides = setInterval(function(){
        carouselList.animate({'marginLeft':-500}, 500, function(){
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            lastItem.after(firstItem);
            carouselList.css({marginLeft:0});
        });
    },3000);
});