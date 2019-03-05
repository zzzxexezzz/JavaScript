var slider = {
    urlsImage: [],
    currentTarget: 0,
    prevBtn: document.getElementById('show-prev'),
    nextBtn: document.getElementById('show-next'),
    slideImg: document.getElementById('slide-img'),

    start: function() {
        let that = this;
        this.prevBtn.addEventListener('click', function(e) {
            that.onShowBtnPrev(e);
        });
        this.nextBtn.addEventListener('click', function(e) {
            that.onShowBtnNext(e);
        });

        //create array images
        this.urlsImage.push('http://webcraft.cc/products/rockstar-slider-jquery-touch-slidergallery/img/1.png');
        this.urlsImage.push('http://webcraft.cc/products/rockstar-slider-jquery-touch-slidergallery/img/2.png');
        this.urlsImage.push('http://webcraft.cc/products/rockstar-slider-jquery-touch-slidergallery/img/3.png');
        this.urlsImage.push('http://webcraft.cc/products/rockstar-slider-jquery-touch-slidergallery/img/4.png');
        this.slideImg.src = this.urlsImage[this.currentTarget];
        this.prevBtn.disabled = true;

    },

    onShowBtnPrev: function(e) {
        this.currentTarget--;
        this.slideImg.src = this.urlsImage[this.currentTarget];
        this.nextBtn.disabled = false;


        //used just if(), disable prev button if need
        if (this.currentTarget === 0) {
            this.prevBtn.disabled = true;
        }
    },

    onShowBtnNext: function(e) {
        this.currentTarget++;
        this.slideImg.src = this.urlsImage[this.currentTarget];
        this.prevBtn.disabled = false;

        //disable next button if need
        if (this.currentTarget === (this.urlsImage.length - 1)) {
            this.nextBtn.disabled = true;
        }
    }

};