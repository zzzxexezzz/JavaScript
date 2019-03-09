let createFactory = {
    createNewSlider: function() {
        let newSlider = {
            urlsImage: [],
            currentTarget: 0,
            prevBtn: null,
            nextBtn: null,
            slideImg: null,

            start: function(elId) {
                //Контекст вызова. (Замыкание)
                let that = this;

                let elSelector = "#" + elId;
                let element = document.querySelector(elSelector);

                this.prevBtn = element.querySelector('.show-prev');
                this.nextBtn = element.querySelector('.show-next');
                this.slideImg = element.querySelector('.slide-img');

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

        return newSlider;
    }
};