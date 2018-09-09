window.onload = () => {
    const burger = document.querySelector('.burger')
    const apps = document.getElementById('apps-wrapper')
    const home = document.getElementById('home')
    const contactus = document.getElementById('contactus')
    const navbarLinks = document.getElementById('nav').children;
    const appsCards = apps.children;
    const collapseBtn = document.querySelector(".collapsible");
    const arrowDown = document.querySelector('.fa-arrow-down')
    const arrowUp = document.querySelector('.fa-arrow-up')
    let scrollTargetElement;
    let scrollToTargetElementInterval;

    burger.addEventListener('click', () => {
        const navbar = document.getElementById("nav");
        burger.classList.toggle("change")
        if (navbar.className === "navbar") {
            navbar.className += " responsive";
        } else {
            navbar.className = "navbar";
        }
    })

    for (const navbarLink of navbarLinks) {
        navbarLink.addEventListener('click', (e) => {
            e.preventDefault()
            scrollTargetElement = document.getElementById(e.target.hash.substring(1))
            scrollToTargetElementInterval = setInterval(scrollToTargetElementFunction, 5);
        })
        function scrollToTargetElementFunction() {
            if (scrollTargetElement.getBoundingClientRect().top < 0) {
                document.body.scrollTop -= 10; // For Safari
                document.documentElement.scrollTop -= 10; // For Chrome, Firefox, IE and Opera
                if (scrollTargetElement.getBoundingClientRect().top > 150) {
                    clearInterval(scrollToTargetElementInterval)
                }
            } else {
                document.body.scrollTop += 10; // For Safari
                document.documentElement.scrollTop += 10; // For Chrome, Firefox, IE and Opera
                if (scrollTargetElement.getBoundingClientRect().top < 80) {
                    clearInterval(scrollToTargetElementInterval)
                }
            }
            
        }
    }
    

    window.onscroll = () => {
        //Start animation when apps in view and change active navbar link.
        var isInViewport = (elem) => {
            const bounding = elem.getBoundingClientRect();
            
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
        if (isInViewport(apps)) {
            if (window.innerWidth > 790) {
                appsCards[0].classList.add('fadeInRight')
                appsCards[1].classList.add('fadeIn')
                appsCards[2].classList.add('fadeInLeft')
            } else {
                appsCards[0].classList.add('fadeInLeft')
                appsCards[1].classList.add('fadeInRight')
            }
            
            navbarLinks[0].classList.remove('active')
            navbarLinks[1].classList.add('active')
            navbarLinks[2].classList.remove('active')
        } else if (isInViewport(home)) {
            navbarLinks[0].classList.add('active')
            navbarLinks[1].classList.remove('active')
            navbarLinks[2].classList.remove('active')
        } else if (isInViewport(contactus)) {
            navbarLinks[0].classList.remove('active')
            navbarLinks[1].classList.remove('active')
            navbarLinks[2].classList.add('active')
        }

    }

    collapseBtn.addEventListener("click", function() {
    collapseBtn.classList.toggle("active-collapsible");
    setTimeout(() => {
        arrowDown.classList.toggle('hide-icon')
        arrowUp.classList.toggle('hide-icon')
    },500)
    const appsContainer = document.querySelector('.apps-container')
    if (appsContainer.classList.contains('apps-container-part-width')) {
        appsContainer.classList.add('apps-container-transition')
        appsContainer.classList.add('apps-container-full-width')
        appsContainer.classList.remove('apps-container-part-width')
        if (window.innerWidth > 790) {
            for (var i = 3; i < appsCards.length; i++) {
                appsCards[i].classList.add('zoomIn')
            }
        } else {
            for (var i = 2; i < appsCards.length; i++) {
                appsCards[i].classList.add('zoomIn')
            }
        }
            
    } else {
        appsContainer.classList.add('apps-container-part-width')
        appsContainer.classList.remove('apps-container-full-width')
    }
    
  });

  //Typewriter effect.
  //Attribution: https://codepen.io/hi-im-si/pen/DHoup.
  const TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === 'We') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};
var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

}