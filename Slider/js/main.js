/* //find button
var prevBtn = document.getElementById('show-prev');
var nextBtn = document.getElementById('show-next');
var slideImg = document.getElementById('slide-img');
//subscribe on events
prevBtn.addEventListener('click', onShowBtnPrev);
nextBtn.addEventListener('click', onShowBtnNext);

//create array images
var urlsImage = [];
urlsImage.push('http://webcraft.cc/products/rockstar-slider-jquery-touch-slidergallery/img/1.png');
urlsImage.push('http://webcraft.cc/products/rockstar-slider-jquery-touch-slidergallery/img/2.png');
urlsImage.push('http://webcraft.cc/products/rockstar-slider-jquery-touch-slidergallery/img/3.png');
urlsImage.push('http://webcraft.cc/products/rockstar-slider-jquery-touch-slidergallery/img/4.png');

var currentTarget = 0;

slideImg.src = urlsImage[currentTarget];
prevBtn.disabled = true;


function onShowBtnPrev() {
    currentTarget--;
    slideImg.src = urlsImage[currentTarget];
    nextBtn.disabled = false;


    //used just if(), disable prev button if need
    if (currentTarget === 0) {
        prevBtn.disabled = true;
    }
}

function onShowBtnNext() {
    currentTarget++;
    slideImg.src = urlsImage[currentTarget];
    prevBtn.disabled = false;

    //disable next button if need
    if (currentTarget === (urlsImage.length - 1)) {
        nextBtn.disabled = true;
    }
}

/*****************************ООП 
var lastSpeed = 0;
var cars = {
    model: 2121,
    name: "Reno",
    isTurn: false,
    speed: 0,
    engine: {
        v: 1.8,
        horsesPower: 123
    },
    start: function() {
        this.isTurn = true;
        //var lastSpeed = this.speed = 12;
    }

}

if (cars.speed > lastSpeed) {
    console.log('I gooooo')
} else if (cars.speed === lastSpeed) {
    console.log('not go')
}

alert(cars.isTurn);
cars.start();
alert(cars.isTurn);
alert(cars.speed); */

slider.start();