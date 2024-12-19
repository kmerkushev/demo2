
    var acc = document.getElementsByClassName("accordion__btn");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    let timer;

    class Chip {
      constructor(src, img) {
        this.src = src;
        this.isPlaying = false;
        this.current = 0;
        this.img = img;        
        this.timer;
        this.img.addEventListener('mouseover', this.play.bind(this));
        this.img.addEventListener('mouseout', this.stop.bind(this));
      }  

      next() {
        if (this.isPlaying === true) {
          this.current++;
  
          if (this.current === this.src.length) {
            this.current = 0;
          }

          this.img.src = this.src[this.current];
        }
      }

      play() {
        this.isPlaying = true;
        this.next()
        this.timer = setInterval(this.next.bind(this), 700);
      }

      stop() {
        this.isPlaying = false;
        clearInterval(this.timer);
      }
      
    }

    let chipFinancials = new Chip([
      'img/chip__financials-01.png',
      'img/chip__financials-02.png',
      'img/chip__financials-03.png',
      'img/chip__financials-04.png',
      'img/chip__financials-05.png'
    ], document.querySelector(`#chip1 img`));

    let chipLocations = new Chip([
      'img/chip__locations-01.png',
      'img/chip__locations-02.png',
      'img/chip__locations-03.png',
      'img/chip__locations-04.png'
    ], document.querySelector(`#chip2 img`));

    let chipPhotos = new Chip([
      'img/chip__photos-01.png',
      'img/chip__photos-02.png',
      'img/chip__photos-03.png'
    ], document.querySelector(`#chip3 img`));



    
