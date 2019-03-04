//Create object Slider
var slider = {
    prevBtn: document.getElementById('show-prev'),
    nextBtn: document.getElementById('show-next'),
    sliedImage: document.getElementById('slide-img'),
    imagesUrls: [],
    currentImage: 0,

    //function init
    start: function() {
        prevBtn.addEventListener('click', onShowPrevBtn),
            nextBtn.addEventListener('click', onShowNextBtn),


            imagesUrls.push('https://www.sunhome.ru/i/wallpapers/28/lotus-eliz-v3.1024x600.jpg'),
            imagesUrls.push('https://mobimg.b-cdn.net/pic/v2/gallery/preview/aston_martin_aston_martin-avto-transport-25935.jpg'),
            imagesUrls.push('https://commonpoll.com/processed-images/1500x/1405.jpg'),
            imagesUrls.push('https://s1.1zoom.ru/big0/47/358153-admin.jpg'),


            sliedImage.src = imagesUrls[currentImage];
    },

    onShowPrevBtn: function() {
        currentImage--;
        sliedImage.src = imagesUrls[currentImage]
        prevBtn.disabled = true;

    },

    onShowNextBtn: function() {
        currentImage++;
        sliedImage.src = imagesUrls[currentImage];
    }


}