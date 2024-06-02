/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Treader","Gamer","Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

var typingEffect2 = new Typed(".typedText2",{
  strings : ["Designer","Gamer","Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SOCIAL ICONS HREF -- ## ----- */
const andreHiered = 'https://api.whatsapp.com/send/?phone=628970460528'
const raffiHiered = 'https://api.whatsapp.com/send/?phone=628877738282&text=Hallo+%2AMUHAMAD+RAFFI+GUMILANG%2A+Saat+ini+perusahaan+kami+sedang+melakukan+%2AOPEN+RECRUTMENT%2A+dengan+ketentuan+%3A%0A%0A%2APosisi+%3A%2A%0A%2AGaji+%3A%2A%0A%2ALokasi%3A%2A%0A%0ADengan+ini+saya+mengajak+kamu+untuk+untuk+ikut+bergabung+di+perusahaan+kami%0A%0ASaya+Tunggu+Info+Selanjutnya%2C%0A%0A%2ATerimakasih%2A&type=phone_number&app_absent=0'

const hierBtn = document.querySelectorAll('.blue-btn')
const iconInstagram = document.querySelectorAll('.uil-instagram')
const iconTelegram = document.querySelectorAll('.uil-telegram-alt')
const iconEmail = document.querySelectorAll('.uil-envelope')
const iconWhatsapp = document.querySelectorAll('.uil-whatsapp')
const iconFacebook = document.querySelectorAll('.uil-facebook-f')
const iconLinkdin = document.querySelectorAll('.uil-linkedin-alt')
const iconGithub = document.querySelectorAll('.uil-github-alt')


// ============ ANDRE ==============
// +62 897-0460-528
// HIERED
hierBtn[0].addEventListener("click", function(){
  window.open(andreHiered, "_blank")
})

// INSTAGRAM
iconInstagram[0].addEventListener("click", function() {
  console.log('ok');
  window.open("https://www.instagram.com/dreeeu_", "_blank")
});

// WHATSAPP
iconWhatsapp[0].addEventListener("click", function() {
  console.log('whatsapp');
  // window.location.href = "https://www.instagram.com/raffimrg/";
});

// TELEGRAM
iconTelegram[0].addEventListener('click', function(){
  window.open("https://t.me/Ndreeeu", "_blank")
})

// EMAIL
iconEmail[0].addEventListener('click', function(){
  window.open("https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=amdrewijaya21@gmail.com.com", "_blank")
});


// ============= RAFFI ==============
// HIERED
hierBtn[1].addEventListener("click", function(){
  // console.log('hiered');
  window.open(raffiHiered, "_blank");
})

iconInstagram[1].addEventListener("click", function() {
  // console.log('ko');
  window.open("https://www.instagram.com/raffimrg/", "_blank");
});

iconWhatsapp[1].addEventListener("click", function() {
  // console.log('whatsapp');
  window.open("https://api.whatsapp.com/send/?phone=628877738282", "_blank")
});

// FACEBOOK
iconFacebook[0].addEventListener("click", function() {
  // console.log('facebook');
  window.open("https://www.facebook.com/minami.raffi.3/", "_blank");
});

// LINKEDIN
iconLinkdin[0].addEventListener("click", function() {
  // console.log('facebook');
  window.open("https://www.linkedin.com/in/raffimrg/", "_blank");
});

// GITHUB
iconGithub[0].addEventListener("click", function() {
  // console.log('github-alt');
  window.open("https://github.com/raffiMRG", "_blank");
});

// EMAIL
iconEmail[1].addEventListener('click', function(){
  window.open("https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=mutekinoraffi@gmail.com.com", "_blank")
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)