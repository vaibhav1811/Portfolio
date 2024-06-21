/*==========show menu=============== */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*=======Menu show================*/
/*Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu');
    });
}


/*=======Hide show================*/
/*Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu');
    });
}

/*==========Remove menu Mobile=============== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');

    //when we clickon each link ,we remove the show menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click',linkAction));


/*==========Background header=============== */
function scrollHeader(){
    const header = document.getElementById('header');
     //when the scroll is greater than 50 viewport height ,add the scroll-header class to header tag

     if(this.scrollY >= 50) header.classList.add('scroll-header');
     else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);



/*==============Contact form==================*/
   
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  //check if the field has a value

  if(contactName.value === '' ||
       contactEmail.value==='' ||  
       Message.value === '' ) 
       {
         
      //add and remove color 
      contactMessage.classList.remove('color-light');
      contactMessage.classList.add('color-dark');

               //show message
               contactMessage.textContent = 'Write all the inputs fields';
       }

       else{
          //serviceID -templateID -#form - publickey
          emailjs.sendForm('service_s945eu6',
              'template_',
              '#contact-form',
              'I3IpBy_1cYtoNvZnD'
          )

         .then(() => {
             //show message and add color , window + dot to open emoji
              
             contactMessage.classList.add('color-light');
             contactMessage.textContent = 'Message sent ✅';


             //remove message after 5 seconds
             setTimeout(() => {
              
              contactMessage.textContent = '';
             }, 5000);

         },

         (error) => {
          alert('OOPs! SOMETHING WENT WRONG....',error);
         }
      
      );

      //clear input fields
      contactName.value = '';
      contactEmail.value = '';
      Message.value = '';
       }



};


contactForm.addEventListener('submit', sendEmail);


/*==========style switcher=============== */
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () =>{

    styleSwitcher.classList.toggle('open');

})


//hide switcher on scroll

window.addEventListener('scroll', () =>{

    if(styleSwitcher.classList.contains('open')){
        styleSwitcher.classList.remove('open');
    }
})


const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled');
        }

        else{
            style.setAttribute('disabled', 'true');
        }
    })
}
