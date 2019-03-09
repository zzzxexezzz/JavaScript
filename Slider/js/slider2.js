var slider2 = {
    urlsImage: [],
    currentTarget: 0,
    prevBtn: document.q('show-prev'),
    nextBtn: document.getElementById('show-next'),
    slideImg: document.getElementById('slide-img2'),

    start: function() {
        //Контекст вызова. (Замыкание)
        let that = this;
        this.prevBtn.addEventListener('click', function(e) {
            that.onShowBtnPrev();
        });
        this.nextBtn.addEventListener('click', function(e) {
            that.onShowBtnNext();
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