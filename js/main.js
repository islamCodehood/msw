window.onload = () => {
    const burger = document.querySelector('.burger')
    burger.addEventListener('click', () => {
        const navbar = document.getElementById("nav");
        burger.classList.toggle("change")
        if (navbar.className === "navbar") {
            navbar.className += " responsive";
        } else {
            navbar.className = "navbar";
        }
    })
    
    //listen to click on scrollTotopBtn and move to the top of the page.
    /* document.getElementById('scrollTotopBtn').addEventListener('click', () => {
        //To make scrolling to top not immediate.
        let scrollToTopTimeInterval = setInterval(scrollToTop, 10)

        function scrollToTop() {
            document.body.scrollTop -= 50; // For Safari
            document.documentElement.scrollTop -= 50; // For Chrome, Firefox, IE and Opera
            if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
                clearInterval(scrollToTopTimeInterval)
            }
        }
    }) */

    window.onscroll = () => {
        /* if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            document.getElementById('scrollTotopBtn').style.display = "block";
        } else {
            document.getElementById('scrollTotopBtn').style.display = "none";
        } */
        //Start animation when apps in view
        const apps = document.getElementById('apps')
        const appsCards = document.getElementById('apps-wrapper').children;
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
            appsCards[0].classList.add('fadeInRight')
            appsCards[1].classList.add('fadeIn')
            appsCards[2].classList.add('fadeInLeft')

            
        }

    }

    const collapseBtn = document.querySelector(".collapsible");
    const arrowDown = document.querySelector('.fa-arrow-down')
    const arrowUp = document.querySelector('.fa-arrow-up')
    const appsCards = document.getElementById('apps-wrapper').children
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
            for (var i = 3; i < appsCards.length; i++) {
                appsCards[i].classList.add('zoomIn')
            }
    } else {
        appsContainer.classList.add('apps-container-part-width')
        appsContainer.classList.remove('apps-container-full-width')
    }
    
  });

}