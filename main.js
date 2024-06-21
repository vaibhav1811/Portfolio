

/*==========Active link=============== */
const navlink= document.querySelectorAll('.nav__link');


function activeLink(){
    activeLink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}


navlink.forEach((a) => a.addEventListener('click',activeLink)); 






/*==========Mixitup filter=============== */

let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});


/*active-work*/

const linkWork= document.querySelectorAll('.category__btn');


function activework(){
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}


linkWork.forEach((a) => a.addEventListener('click',activework)); 


/*==============Testimonials Swiper==================*/

var testiSwiper = new Swiper('.testimonial__container' , {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


  